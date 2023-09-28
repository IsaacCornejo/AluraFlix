import styled from "styled-components";
import restaurant from "./../../img/restaurant.jpg";
import { Link } from "react-router-dom";
import LogoRestauraFlix from "./../../img/Logo.png";

const ComponentHeader = styled.div`
  max-width: 100%;
  height: 50vh;
  /* background-image: url(${restaurant}); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
`;

export const Nav = styled.nav`
  max-width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid red;
  padding: 1rem;
  background-color: black;
`;

export const Logo = styled.img`
  background-color: red;
  width: 200px;
  height: 70px;
`;

export const Btn = styled(Link)`
  border: 1px solid white;
  cursor: pointer;
  color: white;
  padding: 5px;
  text-decoration: none;
`;
const HeaderInfo = styled.section`
  margin: 0 auto;
  margin-top: 10vh;
  max-width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  @media screen and (min-width: 0) and (max-width: 768px) {
    flex-direction: column;
  }
`;
const InfoText = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 0) and (max-width: 768px) {
    align-items: center;
  }
`;
const BtnFrontEnd = styled.a`
  background-color: red;
  padding: 1rem;
`;

const TextHeaderInfo = styled.p`
  width: 50%;
  text-align: start;
  color: white;
  @media screen and (min-width: 0) and (max-width: 768px) {
    width: 80%;
    text-align: center;
  }
`;
const VideoHeaderInfo = styled.iframe`
  border: 2px solid red;
  @media screen and (min-width: 0) and (max-width: 768px) {
    margin-top: 3rem;
    width: 300px;
    height: 200px;
  }
`;

const Header = () => {
  return (
    <>
      {
        <ComponentHeader>
          <Nav>
            <Link to={"/"}>
              <Logo src={LogoRestauraFlix} alt="Logo" />
            </Link>
            <Btn to={"/nuevo-video"}>Nuevo Video</Btn>
          </Nav>
          <HeaderInfo>
            <InfoText>
              <BtnFrontEnd>Lorem Ipsum</BtnFrontEnd>
              <TextHeaderInfo>
                <h2>Challenge React</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita quo dolorum ut rem, nobis ratione, quisquam culpa quos
                deleniti labore assumenda qui animi? Odio at officia voluptate
                praesentium eligendi assumenda.
              </TextHeaderInfo>
            </InfoText>
            <VideoHeaderInfo
              width="800"
              height="300"
              src="https://www.youtube.com/embed/4DwdEaMDTRo?si=WY31yYeNdJYiTm7Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></VideoHeaderInfo>
          </HeaderInfo>
        </ComponentHeader>
      }
    </>
  );
};

export default Header;
