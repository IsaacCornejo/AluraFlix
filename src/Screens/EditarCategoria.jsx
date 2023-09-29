import styled from "styled-components";
import { Nav, Logo, Btn } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import FormularioEditarCategoria from "../components/FormularioEditarCategoria/FormularioEditarCategoria";
import LogoRestauraFlix from "./../img/Logo.png";

const FooterContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const Table = styled.table`
  margin: 0 auto;
  width: 90%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: ${(props) => (props.centrado ? "center" : "left")};
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;
  }
`;

const FormularioCategoria = ({
  nuevaCategoria,
  categorias,
  manejarEnvioRemover,
  manejarEnvioEditarCategoria,
}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const categoria = queryParams.get("categoria");

  const editarCategoria = categorias.filter((categoria) => categoria.id === id);

  const validarInput = (value) => {
    console.log(value);
  };

  return (
    <>
      {
        <div>
          <Nav>
            <Link to={"/"}>
              <Logo src={LogoRestauraFlix} alt="Logo" />
            </Link>
            <Btn to="/nueva-categoria">Regresar</Btn>
          </Nav>
          <FormularioEditarCategoria
            nuevaCategoria={nuevaCategoria}
            categorias={categorias}
            manejarEnvioRemover={manejarEnvioRemover}
            tituloFormulario="Editar Categoria"
            idCategoria={id}
            data={editarCategoria}
            manejarEnvioEditarCategoria={manejarEnvioEditarCategoria}
            categoriaVideo={categoria}
            validarInput={validarInput}
          ></FormularioEditarCategoria>

          {/* <Table>
    <thead>
      <Tr>
        <Th>Nombre</Th>
        <Th>Descripción</Th>
        <Th>Editar</Th>
        <Th>Remover</Th>
      </Tr>
    </thead>
    <tbody>

    {categorias.map((categoria) => {
      return <>{
        <Tr id={categoria.id}>
        <Td>{categoria.titulo}</Td>
        <Td>{categoria.descripcion}</Td>
        <Td centrado="true" id={categoria.id}><Link onClick={()=> manejarEditarCategoria(
          categoria.titulo,
          categoria.descripcion,
          categoria.color,
          categoria.id
          )}
          to={`/editar-categoria?id=${categoria.id}`}
          >Editar</Link></Td>
        <Td centrado="true" id={categoria.id}><a  onClick={()=> manejarEnvioRemover(categoria.id)}>Remover</a></Td>
      </Tr>
      }</>
    }) 
    }
      </tbody>
    </Table>   */}
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </div>
      }
    </>
  );
};

export default FormularioCategoria;
