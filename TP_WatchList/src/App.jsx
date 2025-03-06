import './index.css';
import NavBar from './components/NavBar';
import { FullSeparator } from './components/utility/Separator';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';

const peliculas = [
  {
    id: 1,
    nombre: "La Cámara",
    duracion: "148",
    imagen: "https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 2,
    nombre: "Titanit",
    duracion: "169",
    imagen: "https://es.web.img3.acsta.net/medias/nmedia/18/86/91/41/19870073.jpg",
  },
  {
    id: 3,
    nombre: "Espia por accidente",
    duracion: "120",
    imagen: "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    id: 4,
    nombre: "Espia por accidente II",
    duracion: "160 min",
    imagen: "https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  }
];

function App() {
  const [misPeliculas, setMisPeliculas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Cargar películas del localStorage al iniciar
  useEffect(() => {
    const misPeliculas = JSON.parse(localStorage.getItem('misPeliculas')) || [];
    setMisPeliculas(misPeliculas);
  }, [isModalOpen]);

  // Función para agregar película al localStorage
  const agregarPelicula = (pelicula) => {
    // Verifica si la película ya está en la lista (comparando por ID)
    const existe = misPeliculas.some((p) => p.id === pelicula.id);

    if (existe) {
        alert("La película ya está en tu lista.");
        return; // Evita que se agregue duplicada
    }

    // Si no existe, se agrega la película
    const nuevasPeliculas = [...misPeliculas, pelicula];
    setMisPeliculas(nuevasPeliculas);
    localStorage.setItem('misPeliculas', JSON.stringify(nuevasPeliculas));
    alert("Película Agregada Correctamente a tu Lista");
};

  // Función para remover película del localStorage
  const quitarPelicula = (id) => {
    const peliculasFiltradas = misPeliculas.filter(pelicula => pelicula.id !== id);
    setMisPeliculas(peliculasFiltradas);
    localStorage.setItem('misPeliculas', JSON.stringify(peliculasFiltradas));
    alert("Película Eliminada Correctamente de tu Lista");
  };

  return (
    <>
      <NavBar />
      <FullSeparator />
      <MovieList peliculas={peliculas} agregarPelicula={agregarPelicula} />

      {/* Botón para abrir el modal */}
      <div className="flex justify-center my-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-200 hover:bg-blue-500 rounded-lg cursor-pointer text-black px-4 py-2"
        >
          Ver Mis Películas
        </button>
      </div>

      <MovieModal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        peliculas={misPeliculas}
        quitarPelicula={quitarPelicula}
      />
      <Footer />
    </>
  );
}

export default App;
