import { Nav, Logo, Btn } from "../components/Header/Header";
import Formulario from "../components/FormularioVideo/FormularioVideo";
import Footer from "../components/Footer/Footer";
import LogoRestauraFlix from "./../img/Logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  @media screen and (min-width: 0) and (max-width: 768px) {
    bottom: -160px;
  }
`;

const FormularioNuevoVideo = ({ nuevoVideo, categorias }) => {
  return (
    <div className="App">
      <Nav>
        <Link to={"/"}>
          <Logo src={LogoRestauraFlix} alt="Logo" />
        </Link>
        <Btn to="/">Inicio</Btn>
      </Nav>
      <Formulario nuevoVideo={nuevoVideo} categorias={categorias}></Formulario>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </div>
  );
};

export default FormularioNuevoVideo;
