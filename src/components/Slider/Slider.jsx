import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #000;
  text-align: start;
`;

export const LinkMiniatura = styled(Link)``;

export const SliderContainer = styled.section`
  margin-left: 1rem;
  padding: 1rem;
  display: flex;
  scroll-behavior: smooth;
  overflow-x: scroll;
  gap: 1rem;
`;
export const VideoMiniatura = styled.img`
  border: 4px solid ${(props) => props.color};
  cursor: pointer;
  width: 400px;
  height: 250px;
  @media screen and (min-width: 0) and (max-width: 768px) {
    width: 200px;
    height: 130px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 300px;
    height: 200px;
  }
`;

export const TituloCategoria = styled.h2`
  display: inline-block;
  margin-left: 1rem;
  color: white;
  background-color: ${(props) => props.color};
  padding: 1rem;
  @media screen and (min-width: 0) and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Slider = ({ videos, categoria }) => {
  return (
    <>
      {
        <Container>
          <TituloCategoria color={categoria.color}>
            {categoria.titulo}
          </TituloCategoria>
          <SliderContainer>
            {videos.map((video) => {
              return (
                <>
                  {
                    <LinkMiniatura
                      key={video.valorId}
                      to={`/ver-video/?id=${video.valorId}&category=${video.valorCategoria}`}
                    >
                      <VideoMiniatura
                        id={video.valorId}
                        color={categoria.color}
                        src={video.valorMiniatura}
                        alt={video.valorTitulo}
                        key={video.ValorId}
                      ></VideoMiniatura>
                    </LinkMiniatura>
                  }
                </>
              );
            })}
          </SliderContainer>
        </Container>
      }
    </>
  );
};

export default Slider;
