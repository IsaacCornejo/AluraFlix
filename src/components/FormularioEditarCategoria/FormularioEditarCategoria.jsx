import { useState } from "react";
import { TituloFormulario } from "../FormularioVideo/FormularioVideo";
import Campo from "../Campo/Campo";
import styled from "styled-components";
import { BtnFormulario } from "../FormularioVideo/FormularioVideo";

const Container = styled.div`
  position: relative;
`;

const FormularioNuevoCategoria = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Formulario = ({
  tituloFormulario,
  data,
  manejarEnvioEditarCategoria,
  categoriaVideo,
}) => {
  const datosAEditar = data[0];

  const [titulo, setTitulo] = useState(datosAEditar.titulo);
  const [descripcion, setDescripcion] = useState(datosAEditar.descripcion);
  const [color, setColor] = useState(datosAEditar.color);

  const limpiarFormulario = () => {
    setTitulo("");
    setDescripcion("");
    setColor("");
  };

  const Div = styled.div`
    display: flex;
  `;

  const [errores, setError] = useState([
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

  const validarFormulario = () => {
    const errorActualizado = errores.map((error) => {
      if (titulo === "" && descripcion === "") {
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

  const validarInput = (valor, titulo) => {
    console.log(valor, titulo);
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

  return (
    <>
      {
        <Container>
          <TituloFormulario>{tituloFormulario}</TituloFormulario>
          <FormularioNuevoCategoria>
            <Campo
              type="text"
              label="Nombre"
              value={titulo}
              actualizarValor={setTitulo}
              errores={errores}
              validarInput={validarInput}
            />
            <Campo
              type="text"
              label="Descripcion"
              value={descripcion}
              actualizarValor={setDescripcion}
              errores={errores}
              validarInput={validarInput}
            />
            <InputColor
              type="color"
              label="Color"
              value={color}
              actualizarValor={setColor}
              onChange={(e) => setColor(e.target.value)}
            />
            <Div>
              <BtnFormulario
                onClick={() => {
                  manejarEnvioEditarCategoria(
                    titulo,
                    descripcion,
                    color,
                    datosAEditar.id,
                    categoriaVideo
                  );
                  validarFormulario(titulo, descripcion);
                }}
              >
                Guardar
              </BtnFormulario>
              <BtnFormulario onClick={limpiarFormulario}>Limpiar</BtnFormulario>
            </Div>
          </FormularioNuevoCategoria>
        </Container>
      }
    </>
  );
};

export default Formulario;
