import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchBooksBasedOnQuiz } from '../utils/fetchBooks';

function Recommendations() {
    const location = useLocation();
    const [books, setBooks] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const answers = location.state?.answers || [];

        const fetchBooks = async () => {
            const fetchedBooks = await fetchBooksBasedOnQuiz(answers);
            setBooks(fetchedBooks);
        };

        if (answers.length) {
            fetchBooks();
        }

        // load favorites from localStorage
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
    }, [location.state]);

    // toggle favorite function
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
            <h2 className="text-3xl font-bold mb-4">Your Personalized MatchaBook Blend</h2>
            <p className="mb-6">Based on your quiz answers, here’s what we recommend:</p>

            {books.length > 0 ? (
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
                            
                            {/* favorite button */}
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
            ) : (
                <p>No books found...maybe the matcha spirits are sleeping.</p>
            )}
        </div>
    );
}

export default Recommendations;
