import React, { useState, useEffect } from 'react';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
    }, []);

    const removeFromFavorites = (bookId) => {
        const updatedFavorites = favorites.filter((book) => book.id !== bookId);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return (
        <div className="min-h-screen bg-matcha-light dark:bg-night-library text-matcha-dark dark:text-night-text p-6">
            <h2 className="text-3xl font-bold mb-4">Your Favorite Books</h2>

            {favorites.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {favorites.map((book) => (
                        <div key={book.id} className="bg-white dark:bg-night-library-light p-4 rounded-lg shadow-md relative">
                            <img
                                src={book.volumeInfo.imageLinks?.thumbnail || '/images/book-placeholder.png'}
                                alt={book.volumeInfo.title}
                                className="w-full h-60 object-cover rounded-md mb-2"
                            />
                            <h3 className="font-bold">{book.volumeInfo.title}</h3>
                            <p className="text-sm">{book.volumeInfo.authors?.join(', ')}</p>

                           
                            <button
                                onClick={() => removeFromFavorites(book.id)}
                                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded shadow hover:bg-red-700"
                            >
                              Remove
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No favorite books yet. Go add some from the search or recommendations page! 🍵</p>
            )}
        </div>
    );
}

export default Favorites;
