import styled from "styled-components";
import { Logo } from "../Header/Header";
import LogoRestauraFlix from "./../../img/Logo.png";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  display: block;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid red;
  padding: 1rem;
  box-sizing: border-box;
  gap: 1rem;
`;

const Enlace = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <>
      {
        <FooterContainer>
          <Link to={"/"}>
            <Logo src={LogoRestauraFlix} alt="Logo" />
          </Link>
          <Enlace
            to={"https://isaaccornejo.github.io/portfolio-alura-one/"}
            target="_blank"
          >
            &copy; Desarrollado por Isaac C.
          </Enlace>
        </FooterContainer>
      }
    </>
  );
};

export default Footer;
