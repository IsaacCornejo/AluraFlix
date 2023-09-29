import styled from "styled-components";
import { Logo, Nav, Btn } from "../components/Header/Header";
import { useLocation } from "react-router-dom";
import Relacionados from "../components/Relacionados/Relacionados";
import { Link } from "react-router-dom";
import LogoRestauraFlix from "./../img/Logo.png";
import Footer from "./../components/Footer/Footer";

const VideoComponente = styled.iframe`
  width: 100%;
  height: 50vh;
  margin: 0 auto;
  margin-top: 4rem;
  @media screen and (min-width: 0) and (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const Container = styled.div`
  background-color: black;
  position: relative;
  @media screen and (min-width: 0) and (max-width: 768px) {
    height: 100%;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  position: absolute;
  @media screen and (min-width: 0) and (max-width: 768px) {
    bottom: 50px;
  }
`;

const Descripcion = styled.p`
  color: white;
  margin-left: 1rem;
`;

const TituloVideo = styled.h2`
  margin-left: 1rem;
  color: white;
`;

const VideoCocina = styled.video``;

const VideoCompleto = ({ videos, categorias }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const videoId = queryParams.get("id");
  const category = queryParams.get("category");

  return (
    <Container>
      {
        <div>
          <Nav>
            <Link to={"/"}>
              <Logo src={LogoRestauraFlix} alt="Logo" />
            </Link>
            <Btn to="/">Regresar</Btn>
          </Nav>

          {videos.map(
            (video) =>
              videoId === video.valorId && (
                <>
                  <VideoComponente
                    src={video.valorLinkVideo}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></VideoComponente>
                  <TituloVideo>{video.valorTitulo}</TituloVideo>
                  <Descripcion>
                    Descripcion: {video.valorDescripcion}
                  </Descripcion>
                </>
              )
          )}

          {categorias.map((categoria) => {
            return (
              <>
                {categoria.titulo === category && (
                  <Relacionados
                    videos={videos.filter(
                      (video) =>
                        video.valorCategoria === categoria.titulo &&
                        video.valorId !== videoId
                    )}
                    categorias={categorias}
                    categoria={categoria}
                  ></Relacionados>
                )}
              </>
            );
          })}
        </div>
      }

      <VideoCocina src="./../"></VideoCocina>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
};

export default VideoCompleto;
