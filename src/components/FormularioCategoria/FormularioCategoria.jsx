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
    if (
      !(titulo === undefined || descripcion === undefined || id === undefined)
    ) {
      nuevaCategoria({ titulo, descripcion, color, id });
    }
  };

  const [errores, setError] = useState([
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
      if (titulo === error.titulo) {
        return {
          ...error,
          errorMessage: valor.length === 0 ? "Campo requerido" : "",
          valid: "false",
        };
      }
      return error;
    });
    setError(errorActualizado);
    console.log("Validado");
  };

  const validarFormulario = (data) => {
    const { titulo, descripcion, id } = data;
    const errorActualizado = errores.map((error) => {
      if (
        titulo === undefined &&
        descripcion === undefined &&
        id === undefined
      ) {
        return {
          ...error,
          errorMessage: "Campo requerido",
          valid: "false",
        };
      }
      return error;
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
              <BtnFormulario
                onClick={() => {
                  enviarValores();
                  validarFormulario({ titulo, descripcion, id });
                }}
              >
                Guardar
              </BtnFormulario>
              <BtnFormulario onClick={limpiarFormulario}>Limpiar</BtnFormulario>
            </Div>
          </FormularioNuevoCategoria>
        </div>
      }
    </>
  );
};

export default Formulario;
