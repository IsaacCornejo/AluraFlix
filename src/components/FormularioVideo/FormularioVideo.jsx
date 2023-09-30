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

    if (
      !(valorTitulo === "",
      valorLinkVideo === "",
      valorMiniatura === "",
      valorDescripcion === "",
      valorCategoria === "",
      valorId === "")
    ) {
      nuevoVideo(data);
    }
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
      titulo: "Lista Opciones",
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
    const {
      valorTitulo,
      valorLinkVideo,
      valorMiniatura,
      valorDescripcion,
      valorCategoria,
      valorId,
    } = data;

    const errorActualizado = errores.map((error) => {
      if (
        valorTitulo === "" &&
        valorLinkVideo === "" &&
        valorMiniatura === "" &&
        valorDescripcion === "" &&
        valorCategoria === "" &&
        valorId === ""
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
        <FormularioNuevoVideo>
          <TituloFormulario>Nuevo video</TituloFormulario>
          <Campo
            label="Titulo"
            value={valorTitulo}
            actualizarValor={setValorTitulo}
            validarInput={validarInput}
            errores={errores}
          />
          <Campo
            label="Link del video"
            value={valorLinkVideo}
            actualizarValor={setValorLinkVideo}
            validarInput={validarInput}
            errores={errores}
          />
          <Campo
            label="Link de la miniatura del video"
            value={valorMiniatura}
            actualizarValor={setValorMiniatura}
            validarInput={validarInput}
            errores={errores}
          />
          <Campo
            label="Descripcion del video"
            value={valorDescripcion}
            actualizarValor={setValorDescripcion}
            validarInput={validarInput}
            errores={errores}
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
            validarInput={validarInput}
            errores={errores}
          />
          <Div>
            <div>
              <BtnFormulario
                onClick={() => {
                  enviarValores();
                  validarFormulario({
                    valorTitulo,
                    valorLinkVideo,
                    valorMiniatura,
                    valorDescripcion,
                    valorCategoria,
                    valorId,
                  });
                }}
              >
                Guardar
              </BtnFormulario>
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
