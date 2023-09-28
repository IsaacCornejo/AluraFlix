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
            />
            <Campo
              type="text"
              label="Descripcion"
              value={descripcion}
              actualizarValor={setDescripcion}
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
