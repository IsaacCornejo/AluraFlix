import styled from "styled-components";
import { Logo, Nav, Btn } from "../components/Header/Header";
import { useLocation } from "react-router-dom";
import Relacionados from "../components/Relacionados/Relacionados";
import { Link } from "react-router-dom";
import LogoRestauraFlix from "./../img/Logo.png";

const VideoComponente = styled.iframe`
  width: 100%;
  height: 50vh;
  margin: 0 auto;
`;

const VideoCompleto = ({ videos, categorias }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const videoId = queryParams.get("id");
  const category = queryParams.get("category");

  return (
    <>
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
                <VideoComponente
                  src={video.valorLinkVideo}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></VideoComponente>
              )
          )}

          {categorias.map((categoria) => {
            return (
              <>
                {categoria.titulo === category && (
                  <Relacionados
                    videos={videos.filter(
                      (video) => video.valorCategoria === categoria.titulo
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
    </>
  );
};

export default VideoCompleto;
