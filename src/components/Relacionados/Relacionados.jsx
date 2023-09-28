import { Container, TituloCategoria, SliderContainer } from "../Slider/Slider"
import { LinkMiniatura, VideoMiniatura } from "../Slider/Slider"

const Relacionados = ({videos, categoria, categorias}) => {


  return <>{
  <Container>


      <TituloCategoria color={categoria.color} >Relacionados en {categoria.titulo}</TituloCategoria>
    <SliderContainer>
      
      {
        videos.map((video)=>{
          return <>{
          <LinkMiniatura  to={`/ver-video/?id=${video.valorId}&category=${video.valorCategoria}`}>  
            <VideoMiniatura id={video.valorId} color={categoria.color} src={video.valorMiniatura} alt={video.valorTitulo} key={video.ValorId}></VideoMiniatura>
            </LinkMiniatura>
          }</> 
        })
      }
    </SliderContainer>
    </Container>
}</>

}

export default Relacionados