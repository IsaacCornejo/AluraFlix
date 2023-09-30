import "./App.css";
import { useState } from "react";
import Home from "./Screens/Home";
import { v4 as uuid } from "uuid";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormularioNuevoVideo from "./Screens/FormularioNuevoVideo";
import FormularioNuevaCategoria from "./Screens/FormularioNuevaCategoria";
import VideoCompleto from "./Screens/VideoCompleto";
import EditarCategoria from "./Screens/EditarCategoria";
import Error404 from "./Screens/Error404";

function App() {
  const [videos, setVideos] = useState([
    {
      valorTitulo: "ESPAGUETI AL BURRO A LA MANTEQUILLA | Vicky Receta Facil",
      valorCategoria: "Pasta",
      valorLinkVideo:
        "https://www.youtube.com/watch?v=ZRQeBKTbzYk&ab_channel=VisionDigital",
      valorMiniatura:
        "https://i.ytimg.com/vi/TZaaRgn8Fh8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtA6PvU3UDbok77sp4RrQXf1wobA",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Pasta Plumilla con Salsa de Tomate - El Saborcito Rojo",
      valorCategoria: "Pasta",
      valorLinkVideo:
        "https://www.youtube.com/watch?v=ZRQeBKTbzYk&ab_channel=VisionDigital",
      valorMiniatura:
        "https://i.ytimg.com/vi/FnOAdtqaxwc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCH6CT5Rmc5bor7GgwQNx6qglIc6g",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo:
        "Espaguetis con la salsa más fácil y rica DEL MUNDO - Pasta Recetas faciles",
      valorCategoria: "Pasta",
      valorLinkVideo:
        "https://www.youtube.com/watch?v=ZRQeBKTbzYk&ab_channel=VisionDigital",
      valorMiniatura:
        "https://i.ytimg.com/vi/ui2EBEi1omM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVf9479u1-fbJnp9xw1SCUA4xLWw",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Tacos estilo Ensenada | La Capital",
      valorCategoria: "Tacos",
      valorLinkVideo:
        "https://www.youtube.com/watch?v=ZRQeBKTbzYk&ab_channel=VisionDigital",
      valorMiniatura:
        "https://i.ytimg.com/vi/vOjwjOi5NGM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjZgn9Zg7GUFaJH8GcrBx62V43SA",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Suadero estilo Taqueria | La Capital",
      valorCategoria: "Tacos",
      valorLinkVideo:
        "https://www.youtube.com/watch?v=ZRQeBKTbzYk&ab_channel=VisionDigital",
      valorMiniatura:
        "https://i.ytimg.com/vi/WW6e6QvEv6k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6ASOVKIis2yfFOSB6rgKGUlYW3g",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "TACOS GOBERNADOR | Vicky Receta Facil",
      valorCategoria: "Tacos",
      valorLinkVideo:
        "https://www.youtube.com/watch?v=ZRQeBKTbzYk&ab_channel=VisionDigital",
      valorMiniatura:
        "https://i.ytimg.com/vi/krGgv_jnPQU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0obyrYBFkqxkVFum9N_zP37SSiQ",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo:
        "Tacos de Carne Asada con Salsa verde - Receta Mexicana Rica y Fácil",
      valorCategoria: "Tacos",
      valorLinkVideo:
        "https://www.youtube.com/watch?v=ZRQeBKTbzYk&ab_channel=VisionDigital",
      valorMiniatura:
        "https://i.ytimg.com/vi/TdbcEGJayZQ/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArYIigIMCAAQARhlIFsoQTAP&rs=AOn4CLBorf5lrUYl3S6oqxLAkQHRyJTVCQ",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Tacos de Pescado",
      valorCategoria: "Tacos",
      valorLinkVideo:
        "https://www.youtube.com/watch?v=ZRQeBKTbzYk&ab_channel=VisionDigital",
      valorMiniatura:
        "https://i.ytimg.com/vi/sqDOg7h2_D8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANnoxQYfEWuialAIVHX0gBYEOoRw",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Tacos de Pescado",
      valorCategoria: "Tacos",
      valorLinkVideo:
        "https://www.youtube.com/watch?v=ZRQeBKTbzYk&ab_channel=VisionDigital",
      valorMiniatura:
        "https://i.ytimg.com/vi/YoDNGDrDH5U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsOOf8rDTN9oEQWBaVkuzcewtn6g",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Ensalada de Pollo",
      valorCategoria: "Ensaladas",
      valorLinkVideo:
        "https://www.youtube.com/watch?v=ZRQeBKTbzYk&ab_channel=VisionDigital",
      valorMiniatura:
        "https://i.ytimg.com/vi/vhTFoHWSGNM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBVvNfib0le6_GFynJpvVpddw0t1A",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Sushi de Oreo",
      valorCategoria: "Postres",
      valorLinkVideo:
        "https://www.youtube.com/watch?v=ZRQeBKTbzYk&ab_channel=VisionDigital",
      valorMiniatura:
        "https://i.ytimg.com/vi/_gYDbU7w5XY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkjUzTdM8RMK7-L0BH-TqhKfWmTg",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Pizza Casera",
      valorCategoria: "Pizza",
      valorLinkVideo:
        "https://www.youtube.com/watch?v=ZRQeBKTbzYk&ab_channel=VisionDigital",
      valorMiniatura:
        "https://i.ytimg.com/vi/crdtrzZj3fo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjY2R3yXZphzDkBqnmlggfMiX9RA",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Pastel",
      valorCategoria: "Postres",
      valorLinkVideo:
        "https://www.youtube.com/watch?v=ZRQeBKTbzYk&ab_channel=VisionDigital",
      valorMiniatura:
        "https://i.ytimg.com/vi/OTadwkNvryw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAq2E_oiqgVplVdnN3bJE2ydSM3_Q",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Pasta Alfredo",
      valorCategoria: "Pasta",
      valorLinkVideo:
        "https://www.youtube.com/watch?v=ZRQeBKTbzYk&ab_channel=VisionDigital",
      valorMiniatura:
        "https://i.ytimg.com/vi/Hzi9KRgt03s/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfVjyn3KUaRUEYpACLpy78VoxyBw",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Sushi Casero",
      valorCategoria: "Sushi",
      valorLinkVideo:
        "https://www.youtube.com/watch?v=ZRQeBKTbzYk&ab_channel=VisionDigital",
      valorMiniatura: "https://via.placeholder.com/350x250?text=Sushi+Casero",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "COLD COFFEE DESSERT",
      valorCategoria: "Postres",
      valorLinkVideo:
        "https://www.youtube.com/watch?v=ZRQeBKTbzYk&ab_channel=VisionDigital",
      valorMiniatura:
        "https://i.ytimg.com/vi/4oaHl4ulGwo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDNQLhptoLwrC5I7Lo5XiI969plpw",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Sopa de Pollo",
      valorCategoria: "Sopas",
      valorLinkVideo:
        "https://www.youtube.com/watch?v=ZRQeBKTbzYk&ab_channel=VisionDigital",
      valorMiniatura:
        "https://i.ytimg.com/vi/CtRO6qbRiKc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSSSZ_cGZfUXyPrpcGcI2MKiWSjQ",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Lasagna Casera",
      valorCategoria: "Pasta",
      valorLinkVideo:
        "https://www.youtube.com/watch?v=ZRQeBKTbzYk&ab_channel=VisionDigital",
      valorMiniatura:
        "https://i.ytimg.com/vi/f29C4nLLvLQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDs5PIQMkHpR4Q-eqlvmX0ku1ik5A",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
  ]);

  const [categorias, setCategories] = useState([
    {
      titulo: "Tacos",
      id: uuid(),
      color: "#a3a948",
      descripcion: "Lorem ipsum",
    },
    {
      titulo: "Sopas",
      id: uuid(),
      color: "#edb92e",
      descripcion: "Lorem ipsum",
    },
    {
      titulo: "Pizza",
      id: uuid(),
      color: "#f85931",
      descripcion: "Lorem ipsum",
    },
    {
      titulo: "Ensaladas",
      id: uuid(),
      color: "#ce1836",
      descripcion: "Lorem ipsum",
    },
    {
      titulo: "Postres",
      id: uuid(),
      color: "#009989",
      descripcion: "Lorem ipsum",
    },
    {
      titulo: "Pasta",
      id: uuid(),
      color: "#f85931",
      descripcion: "Lorem ipsum",
    },
  ]);

  const nuevoVideo = (video) => {
    setVideos([...videos, video]);
  };

  const nuevaCategoria = (data) => {
    setCategories([...categorias, data]);
  };

  const manejarEnvioRemover = (id) => {
    const nuevasCategorias = categorias.filter(
      (categoria) => categoria.id !== id
    );

    setCategories(nuevasCategorias);
  };

  const manejarEnvioEditarCategoria = (
    titulo,
    descripcion,
    color,
    id,
    categoriaVideo
  ) => {
    const categoriasEditadas = categorias.map((categoria) => {
      if (categoria.id === id) {
        return {
          ...categoria,
          titulo: titulo,
          descripcion: descripcion,
          color: color,
        };
      }
      return categoria;
    });
    if (!(titulo === undefined && descripcion === undefined)) {
      setCategories(categoriasEditadas);
    }

    const videosEditados = videos.map((video) => {
      if (video.valorCategoria === categoriaVideo) {
        return {
          ...video,
          valorCategoria: titulo,
        };
      }
      return video;
    });
    setVideos(videosEditados);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home videos={videos} categorias={categorias} />,
      errorElement: <Error404 />,
    },
    {
      path: "/nuevo-video",
      element: (
        <FormularioNuevoVideo nuevoVideo={nuevoVideo} categorias={categorias} />
      ),
      errorElement: <Error404 />,
    },
    {
      path: "/nueva-categoria",
      element: (
        <FormularioNuevaCategoria
          manejarEnvioRemover={manejarEnvioRemover}
          nuevaCategoria={nuevaCategoria}
          categorias={categorias}
        />
      ),
      errorElement: <Error404 />,
    },
    {
      path: "/ver-video",
      element: <VideoCompleto videos={videos} categorias={categorias} />,
      errorElement: <Error404 />,
    },
    {
      path: "/editar-categoria",
      element: (
        <EditarCategoria
          manejarEnvioEditarCategoria={manejarEnvioEditarCategoria}
          manejarEnvioRemover={manejarEnvioRemover}
          nuevaCategoria={nuevaCategoria}
          categorias={categorias}
        />
      ),
      errorElement: <Error404 />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
