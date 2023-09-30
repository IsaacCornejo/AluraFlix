import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import { Nav, Btn, Logo, InfoText } from "./../components/Header/Header";
import { Link } from "react-router-dom";
import LogoRestauraFlix from "./../img/Logo.png";
import Error404Image from "./../img/Error404.png";
import { TbArrowBack } from "react-icons/tb";

const DivPrincipal = styled.div`
  background-color: black;
  position: relative;
`;

const FooterContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  height: 100%;
  @media screen and (min-width: 0) and (max-width: 768px) {
    gap: 2rem;
    flex-direction: column;
  }
`;

const ImgErrorDesktop = styled.img`
  width: 800px;
  height: 870px;
  @media screen and (min-width: 0) and (max-width: 768px) {
    max-width: 100%;
    height: 500px;
    order: 2;
  }
`;

const BtnRegresar = styled(Btn)`
  border: none;
  font-size: 2rem;
  &:hover {
    text-decoration: underline;
  }
  @media screen and (min-width: 0) and (max-width: 768px) {
    text-decoration: underline;
    text-align: center;
    order: 1;
  }
`;

const InfoTextError = styled(InfoText)`
  font-size: 3rem;
  @media screen and (min-width: 0) and (max-width: 768px) {
    text-align: center;
    order: 0;
  }
`;

const Error404 = () => {
  return (
    <DivPrincipal>
      <Nav>
        <Link to={"/"}>
          <Logo src={LogoRestauraFlix} alt="Logo" />
        </Link>
        <Btn to="/">Regresar</Btn>
      </Nav>
      <Container>
        <InfoTextError>
          Opps... Te perdiste?<br></br>Error404
        </InfoTextError>
        <ImgErrorDesktop src={Error404Image} />
        <BtnRegresar to={"/"}>-Regresemos a la cocina-</BtnRegresar>
      </Container>

      <FooterContainer>
        <Footer />
      </FooterContainer>
    </DivPrincipal>
  );
};

export default Error404;
