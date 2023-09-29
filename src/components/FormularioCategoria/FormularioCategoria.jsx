import { useState } from "react";
import { TituloFormulario } from "../FormularioVideo/FormularioVideo";
import Campo from "../Campo/Campo";
import styled from "styled-components";
import { BtnFormulario } from "../FormularioVideo/FormularioVideo";

const FormularioNuevoCategoria = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const InputColor = styled.input`
  width: 89%;
  outline: none;
  border: none;
  background-color: #53585d;
  color: white;
  box-sizing: border-box;
  padding: 8px;
  margin-bottom: 1rem;
  @media screen and (min-width: 0) and (max-width: 768px) {
    width: 83%;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Formulario = ({ nuevaCategoria, tituloFormulario }) => {
  const [titulo, setTitulo] = useState();
  const [descripcion, setDescripcion] = useState();
  const [color, setColor] = useState("000000");
  const [id, setId] = useState();

  const limpiarFormulario = () => {
    setTitulo("");
    setDescripcion("");
    setColor("");
    setId("");
  };

  const enviarValores = () => {
    nuevaCategoria({ titulo, descripcion, color, id });
  };

  const [errores, setError] = useState([
    {
      titulo: "Titulo",
      errorMessage: "",
      valid: "true",
    },
    {
      titulo: "Link del video",
      errorMessage: "",
      valid: "true",
    },
    {
      titulo: "Link de la miniatura del video",
      errorMessage: "",
      valid: "true",
    },
    {
      titulo: "Descripcion del video",
      errorMessage: "",
      valid: "true",
    },
    {
      titulo: "Codigo de seguridad",
      errorMessage: "",
      valid: "true",
    },
    {
      titulo: "Nombre",
      errorMessage: "",
      valid: "true",
    },
    {
      titulo: "Descripcion",
      errorMessage: "",
      valid: "true",
    },
  ]);

  const validarInput = (valor, titulo) => {
    const errorActualizado = errores.map((error) => {
      if (valor.length === 0 && titulo === error.titulo) {
        return {
          ...error,
          errorMessage: "Campo requerido",
          valid: "false",
        };
      } else {
        return {
          ...error,
          errorMessage: "",
          valid: "true",
        };
      }
    });
    setError(errorActualizado);
    console.log("Validado");
  };

  return (
    <>
      {
        <div>
          <TituloFormulario>{tituloFormulario}</TituloFormulario>
          <FormularioNuevoCategoria>
            <Campo
              type="text"
              label="Nombre"
              value={titulo}
              actualizarValor={setTitulo}
              validarInput={validarInput}
              errores={errores}
            />
            <Campo
              type="text"
              label="Descripcion"
              value={descripcion}
              actualizarValor={setDescripcion}
              validarInput={validarInput}
              errores={errores}
            />
            <InputColor
              type="color"
              label="Color"
              value={color}
              actualizarValor={setColor}
              onChange={(e) => setColor(e.target.value)}
            />
            <Campo
              type="text"
              label="Codigo de seguridad"
              value={id}
              actualizarValor={setId}
              validarInput={validarInput}
              errores={errores}
            />
            <Div>
              <BtnFormulario onClick={enviarValores}>Guardar</BtnFormulario>
              <BtnFormulario onClick={limpiarFormulario}>Limpiar</BtnFormulario>
            </Div>
          </FormularioNuevoCategoria>
        </div>
      }
    </>
  );
};

export default Formulario;
