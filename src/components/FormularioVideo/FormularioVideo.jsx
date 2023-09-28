import { useState } from "react";
import styled from "styled-components";
import Campo from "../Campo/Campo";
import { Btn } from "../Header/Header";
import ListaOpciones from "../ListaOpciones/ListaOpciones";

const FormularioNuevoVideo = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;
export const TituloFormulario = styled.h1`
  text-align: center;
`;

export const BtnFormulario = styled(Btn)`
  color: black;
  border-color: black;
  margin-right: 1rem;
`;

const Div = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Formulario = ({ nuevoVideo, categorias }) => {
  const [valorTitulo, setValorTitulo] = useState("");
  const [valorLinkVideo, setValorLinkVideo] = useState("");
  const [valorMiniatura, setValorMiniatura] = useState("");
  const [valorCategoria, setValorCategoria] = useState("");
  const [valorDescripcion, setValorDescripcion] = useState("");
  const [valorId, setValorId] = useState("");

  const limpiarFormulario = () => {
    setValorTitulo("");
    setValorLinkVideo("");
    setValorMiniatura("");
    setValorCategoria("");
    setValorDescripcion("");
    setValorId("");
    console.log("Limpiado");
  };

  const enviarValores = () => {
    let data = {
      valorTitulo,
      valorLinkVideo,
      valorMiniatura,
      valorDescripcion,
      valorCategoria,
      valorId,
    };
    nuevoVideo(data);
  };

  return (
    <>
      {
        <FormularioNuevoVideo>
          <TituloFormulario>Nuevo video</TituloFormulario>
          <Campo
            label="Titulo"
            value={valorTitulo}
            actualizarValor={setValorTitulo}
          />
          <Campo
            label="Link del video"
            value={valorLinkVideo}
            actualizarValor={setValorLinkVideo}
          />
          <Campo
            label="Link de la miniatura del video"
            value={valorMiniatura}
            actualizarValor={setValorMiniatura}
          />
          <Campo
            label="Descripcion del video"
            value={valorDescripcion}
            actualizarValor={setValorDescripcion}
          />
          <ListaOpciones
            categorias={categorias}
            value={valorCategoria}
            actualizarValor={setValorCategoria}
          ></ListaOpciones>
          <Campo
            label="Codigo de seguridad"
            value={valorId}
            actualizarValor={setValorId}
          />
          <Div>
            <div>
              <BtnFormulario onClick={enviarValores}>Guardar</BtnFormulario>
              <BtnFormulario onClick={limpiarFormulario}>Limpiar</BtnFormulario>
            </div>
            <BtnFormulario to={"/nueva-categoria"}>
              Nueva Categoria
            </BtnFormulario>
          </Div>
        </FormularioNuevoVideo>
      }
    </>
  );
};

export default Formulario;
