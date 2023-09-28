import Header from "./../components/Header/Header";
import Slider from "./../components/Slider/Slider";
import Footer from "../components/Footer/Footer";
import { Container } from "./../components/Slider/Slider";
import styled from "styled-components";

const SliderContainer = styled(Container)`
  margin-top: 400px;
`;

const DivPrincipal = styled.div`
  background-color: black;
`;

const Home = ({ videos, categorias }) => {
  return (
    <DivPrincipal>
      <Header categorias={categorias} />

      <SliderContainer>
        {categorias.map((categoria) => {
          return (
            <Slider
              categoria={categoria}
              videos={videos.filter(
                (video) => video.valorCategoria === categoria.titulo
              )}
              key={categoria.id}
            />
          );
        })}
      </SliderContainer>
      <Footer />
    </DivPrincipal>
  );
};

export default Home;
