import { Nav, Logo, Btn } from "../components/Header/Header";
import Formulario from "../components/FormularioVideo/FormularioVideo";
import Footer from "../components/Footer/Footer";
import LogoRestauraFlix from "./../img/Logo.png";
import { Link } from "react-router-dom";

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
      <Footer />
    </div>
  );
};

export default FormularioNuevoVideo;
