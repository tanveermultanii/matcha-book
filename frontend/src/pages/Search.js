import React, { useState, useEffect } from 'react';
import { fetchBooksByQuery } from '../utils/fetchBooks';

function Search() {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // load favorites from localStorage
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
    }, []);

    const handleSearch = async () => {
        if (query.trim() === '') return;

        setLoading(true);
        const results = await fetchBooksByQuery(query);
        setBooks(results);
        setLoading(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      };
    
    const toggleFavorite = (book) => {
        let updatedFavorites;
        if (favorites.some((fav) => fav.id === book.id)) {
            updatedFavorites = favorites.filter((fav) => fav.id !== book.id);
        } else {
            updatedFavorites = [...favorites, book];
        }

        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return (
        <div className="min-h-screen bg-matcha-light dark:bg-night-library text-matcha-dark dark:text-night-text p-6">
            <h2 className="text-3xl font-bold mb-4">Search for Books</h2>
            <div className="flex space-x-2 mb-6">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search by title, author, genre..."
                    className="flex-grow p-2 rounded border dark:bg-night-library-light dark:text-night-text"
                />
                <button
                    onClick={handleSearch}
                    className="bg-matcha-dark dark:bg-night-library-light text-white px-4 py-2 rounded shadow hover:bg-matcha-light hover:text-matcha-dark"
                >
                    Search
                </button>
            </div>

            {loading && (
                <div className="flex justify-center items-center">
                    <div className="w-16 h-16 border-4 border-matcha-dark border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {!loading && books.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {books.map((book) => (
                        <div key={book.id} className="bg-white dark:bg-night-library-light p-4 rounded-lg shadow-md relative">
                            <img
                                src={book.volumeInfo.imageLinks?.thumbnail || '/images/book-placeholder.png'}
                                alt={book.volumeInfo.title}
                                className="w-full h-60 object-cover rounded-md mb-2"
                            />
                            <h3 className="font-bold">{book.volumeInfo.title}</h3>
                            <p className="text-sm">{book.volumeInfo.authors?.join(', ')}</p>

                            <button
                                onClick={() => toggleFavorite(book)}
                                className={`absolute top-2 right-2 p-2 rounded-full ${
                                    favorites.some((fav) => fav.id === book.id) ? "bg-red-500 text-white" : "bg-gray-300 text-gray-700"
                                }`}
                            >
                                ❤️
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {!loading && query && books.length === 0 && (
                <p>No books found for "{query}". Try something else?</p>
            )}
        </div>
    );
}

export default Search;