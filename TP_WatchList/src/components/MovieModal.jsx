import React from 'react';

const MovieModal = ({ visible, onClose, peliculas, quitarPelicula }) => {
    if (!visible) return null; // Evita renderizar el modal si el estado visible es falso
    const cntPelis= peliculas.length;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white max-w-lg w-full h-auto p-4 rounded-lg shadow-lg relative">
                <h1 className="text-center text-xl font-bold mb-3">Mis Películas ({cntPelis})</h1>
                <div className="max-h-96 overflow-y-auto">
                    {peliculas?.map(({ id, imagen, nombre, duracion }) => (
                        <div key={id} className="border rounded-lg p-3 mb-2 flex items-center space-x-3">
                            <img
                                src={imagen}
                                alt={nombre}
                                className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                                <h2 className="text-sm font-bold">{nombre}</h2>
                                <p className="text-gray-600 text-xs flex items-center">
                                    <i className="bi bi-hourglass-split mr-1"></i> {duracion} min.
                                </p>
                            </div>
                            <button
                                className="px-3 py-1 bg-red-200 hover:bg-red-500 text-xs rounded-lg cursor-pointer"
                                onClick={() => quitarPelicula(id)}
                            >
                                <i className="bi bi-trash"></i>
                            </button>
                        </div>
                    ))}
                </div>

                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl cursor-pointer"
                    onClick={onClose}
                >
                    <i className="bi bi-x-square"></i>
                </button>
            </div>
        </div>
    );
};

export default MovieModal;
