import styled from "styled-components";
import { Logo } from "../Header/Header";
import LogoRestauraFlix from "./../../img/Logo.png";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  display: block;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  border-top: 1px solid red;
  padding: 1rem;
  box-sizing: border-box;
`;

const Footer = () => {
  return (
    <>
      {
        <FooterContainer>
          <Link to={"/"}>
            <Logo src={LogoRestauraFlix} alt="Logo" />
          </Link>
        </FooterContainer>
      }
    </>
  );
};

export default Footer;
