import "./App.css";
import { useState } from "react";
import Home from "./Screens/Home";
import { v4 as uuid } from "uuid";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormularioNuevoVideo from "./Screens/FormularioNuevoVideo";
import FormularioNuevaCategoria from "./Screens/FormularioNuevaCategoria";
import VideoCompleto from "./Screens/VideoCompleto";
import EditarCategoria from "./Screens/EditarCategoria";

function App() {
  const [videos, setVideos] = useState([
    {
      valorTitulo: "Receta de Spaghetti Carbonara",
      valorCategoria: "Pasta",
      valorLinkVideo: "https://www.youtube.com/watch?v=ABC123",
      valorMiniatura:
        "https://via.placeholder.com/350x250?text=Spaghetti+Carbonara",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Sopa de Tomate Casera",
      valorCategoria: "Sopas",
      valorLinkVideo:
        "https://www.youtube.com/embed/xDYFmZre9Dc?si=MFYNLb6i8lna5NIS",
      valorMiniatura: "https://via.placeholder.com/350x250?text=Sopa+Tomate",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Tacos de Pescado",
      valorCategoria: "Tacos",
      valorLinkVideo:
        "https://www.youtube.com/embed/xDYFmZre9Dc?si=MFYNLb6i8lna5NIS",
      valorMiniatura: "https://via.placeholder.com/350x250?text=Tacos+Pescado",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Tacos de Pescado",
      valorCategoria: "Tacos",
      valorLinkVideo:
        "https://www.youtube.com/embed/xDYFmZre9Dc?si=MFYNLb6i8lna5NIS",
      valorMiniatura: "https://via.placeholder.com/350x250?text=Tacos+Pescado",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Tacos de Pescado",
      valorCategoria: "Tacos",
      valorLinkVideo:
        "https://www.youtube.com/embed/xDYFmZre9Dc?si=MFYNLb6i8lna5NIS",
      valorMiniatura: "https://via.placeholder.com/350x250?text=Tacos+Pescado",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Tacos de Pescado",
      valorCategoria: "Tacos",
      valorLinkVideo:
        "https://www.youtube.com/embed/xDYFmZre9Dc?si=MFYNLb6i8lna5NIS",
      valorMiniatura: "https://via.placeholder.com/350x250?text=Tacos+Pescado",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Tacos de Pescado",
      valorCategoria: "Tacos",
      valorLinkVideo:
        "https://www.youtube.com/embed/xDYFmZre9Dc?si=MFYNLb6i8lna5NIS",
      valorMiniatura: "https://via.placeholder.com/350x250?text=Tacos+Pescado",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Tacos de Pescado",
      valorCategoria: "Tacos",
      valorLinkVideo:
        "https://www.youtube.com/embed/xDYFmZre9Dc?si=MFYNLb6i8lna5NIS",
      valorMiniatura: "https://via.placeholder.com/350x250?text=Tacos+Pescado",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Tacos de Pescado",
      valorCategoria: "Tacos",
      valorLinkVideo:
        "https://www.youtube.com/embed/xDYFmZre9Dc?si=MFYNLb6i8lna5NIS",
      valorMiniatura: "https://via.placeholder.com/350x250?text=Tacos+Pescado",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Ensalada César",
      valorCategoria: "Ensaladas",
      valorLinkVideo:
        "https://www.youtube.com/embed/xDYFmZre9Dc?si=MFYNLb6i8lna5NIS",
      valorMiniatura: "https://via.placeholder.com/350x250?text=Ensalada+César",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Postre de Chocolate",
      valorCategoria: "Postres",
      valorLinkVideo:
        "https://www.youtube.com/embed/xDYFmZre9Dc?si=MFYNLb6i8lna5NIS",
      valorMiniatura:
        "https://via.placeholder.com/350x250?text=Postre+Chocolate",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Pizza Casera",
      valorCategoria: "Pizza",
      valorLinkVideo:
        "https://www.youtube.com/embed/xDYFmZre9Dc?si=MFYNLb6i8lna5NIS",
      valorMiniatura: "https://via.placeholder.com/350x250?text=Pizza+Casera",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Tarta de Manzana",
      valorCategoria: "Postres",
      valorLinkVideo:
        "https://www.youtube.com/embed/xDYFmZre9Dc?si=MFYNLb6i8lna5NIS",
      valorMiniatura: "https://via.placeholder.com/350x250?text=Tarta+Manzana",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Pasta Alfredo",
      valorCategoria: "Pasta",
      valorLinkVideo:
        "https://www.youtube.com/embed/xDYFmZre9Dc?si=MFYNLb6i8lna5NIS",
      valorMiniatura: "https://via.placeholder.com/350x250?text=Pasta+Alfredo",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Sushi Casero",
      valorCategoria: "Sushi",
      valorLinkVideo:
        "https://www.youtube.com/embed/xDYFmZre9Dc?si=MFYNLb6i8lna5NIS",
      valorMiniatura: "https://via.placeholder.com/350x250?text=Sushi+Casero",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Tarta de Limón",
      valorCategoria: "Postres",
      valorLinkVideo:
        "https://www.youtube.com/embed/xDYFmZre9Dc?si=MFYNLb6i8lna5NIS",
      valorMiniatura: "https://via.placeholder.com/350x250?text=Tarta+Limón",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Tacos de Carne Asada",
      valorCategoria: "Tacos",
      valorLinkVideo:
        "https://www.youtube.com/embed/xDYFmZre9Dc?si=MFYNLb6i8lna5NIS",
      valorMiniatura:
        "https://via.placeholder.com/350x250?text=Tacos+Carne+Asada",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Sopa de Pollo",
      valorCategoria: "Sopas",
      valorLinkVideo:
        "https://www.youtube.com/embed/xDYFmZre9Dc?si=MFYNLb6i8lna5NIS",
      valorMiniatura: "https://via.placeholder.com/350x250?text=Sopa+Pollo",
      valorId: uuid(),
      valorDescripcion: "Lorem ipsum",
    },
    {
      valorTitulo: "Lasagna Casera",
      valorCategoria: "Pasta",
      valorLinkVideo:
        "https://www.youtube.com/embed/xDYFmZre9Dc?si=MFYNLb6i8lna5NIS",
      valorMiniatura: "https://via.placeholder.com/350x250?text=Lasagna+Casera",
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
    setCategories(categoriasEditadas);

    const videosEditados = videos.map((video) => {
      if (video.valorCategoria === categoriaVideo) {
        return {
          ...video,
          valorCategoria: titulo, // Puedes actualizar otros campos si es necesario
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
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/nuevo-video",
      element: (
        <FormularioNuevoVideo nuevoVideo={nuevoVideo} categorias={categorias} />
      ),
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
    },
    {
      path: "/ver-video",
      element: <VideoCompleto videos={videos} categorias={categorias} />,
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
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
