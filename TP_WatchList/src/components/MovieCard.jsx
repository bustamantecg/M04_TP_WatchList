import React from 'react';

const MovieCard = ({ pelicula, agregarPelicula }) => {
  return (
    <div className="max-w-xs bg-white border rounded-lg p-3 shadow-lg">
      <img 
        src={pelicula.imagen} 
        alt={pelicula.nombre} 
        className="w-full h-48 object-contain rounded-t-lg"
      />
      <div className="p-3">
        <h2 className="text-lg font-bold text-center">{pelicula.nombre}</h2>
        <p className="text-gray-600 text-sm text-center">{pelicula.duracion} min</p>
        <button 
          className="mt-2 w-full px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg"
          onClick={() => agregarPelicula(pelicula)}
        >
          Agregar <i className="bi bi-pin-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
