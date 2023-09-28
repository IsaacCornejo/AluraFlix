import styled from "styled-components";
import { Nav, Logo, Btn } from "../components/Header/Header";
import Formulario from "../components/FormularioCategoria/FormularioCategoria";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import LogoRestauraFlix from "./../img/Logo.png";

const Table = styled.table`
  margin: 0 auto;
  width: 90%;
  border-collapse: collapse;
  margin-bottom: 3rem;
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

const LinkFormulario = styled(Link)`
  text-decoration: none;
  color: black;
`;

const FormularioCategoria = ({
  nuevaCategoria,
  categorias,
  manejarEnvioRemover,
  Id,
}) => {
  return (
    <>
      {
        <div>
          <Nav>
            <Link to={"/"}>
              <Logo src={LogoRestauraFlix} alt="Logo" />
            </Link>
            <Btn to="/nuevo-video">Regresar</Btn>
          </Nav>
          <Formulario
            nuevaCategoria={nuevaCategoria}
            categorias={categorias}
            tituloFormulario="Nueva categoria"
          ></Formulario>

          <Table>
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
                return (
                  <>
                    {
                      <Tr id={categoria.id}>
                        <Td>{categoria.titulo}</Td>
                        <Td>{categoria.descripcion}</Td>
                        <Td centrado="true" id={categoria.id}>
                          <LinkFormulario
                            to={`/editar-categoria?id=${categoria.id}&categoria=${categoria.titulo}`}
                          >
                            Editar
                          </LinkFormulario>
                        </Td>
                        <Td centrado="true" id={categoria.id}>
                          <a onClick={() => manejarEnvioRemover(categoria.id)}>
                            Remover
                          </a>
                        </Td>
                      </Tr>
                    }
                  </>
                );
              })}
            </tbody>
          </Table>

          <Footer />
        </div>
      }
    </>
  );
};

export default FormularioCategoria;
