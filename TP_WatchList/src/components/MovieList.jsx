//Este componente se encarga de mostrar las tarjetas de las películas.
import React from 'react';
import MovieCard from './MovieCard';

const
  MovieList = ({ peliculas, agregarPelicula }) => {
    return (
      <>
      <div className="container mx-auto px-4 bg-blue-300 p-2"> {/* Agrega un contenedor para el margen */}
        <h1 className="text-center text-2xl font-bold p-3">Nuestro Catálogo de Películas</h1> {/* Agrega la clase text-center */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">{/* Define la cuadrícula */}
            {peliculas.map((pelicula) => (
              <MovieCard key={pelicula.id} pelicula={pelicula} agregarPelicula={agregarPelicula} />
            ))}
          </div>
        </div>
      </>
    );
  };

export default MovieList;