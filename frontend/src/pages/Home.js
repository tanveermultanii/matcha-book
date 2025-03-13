import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center 
                    bg-matcha-light dark:bg-night-library 
                    text-matcha-dark dark:text-night-text p-4">
      <h1 className="text-4xl mb-4 ">Welcome to</h1>
      <h2
        className="text-6xl font-bold mb-6"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        MATCHABOOK
      </h2>
      <p className="mb-6 max-w-md">
        Discover personalized book recommendations, just like a tea sommelier curates the perfect matcha blend for you!
      </p>
      <Link
            to="/quiz"
            className="bg-matcha-dark dark:bg-night-library 
                    text-white py-2 px-4 rounded shadow hover:bg-matcha-light 
                    hover:text-matcha-dark border border-matcha-dark"
        >
            Start Your Personalized Pairing
        </Link>
    </div>
  );
}

export default Home;
