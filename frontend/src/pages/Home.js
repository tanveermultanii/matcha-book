import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // Typewriter effect for "MATCHABOOK"
  const fullText = "MATCHABOOK";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Floating Cubes Background */}
      <div className="floating-bg absolute inset-0 -z-20">
        <ul className="floating-cubes">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center p-4">
        <h1 className="text-4xl mb-4">Welcome to</h1>
        <h2
          className="text-6xl font-bold mb-6"
          style={{ fontFamily: "'Playfair Display', serif"}}
        >
          {typedText}
        </h2>
        <p className="mb-6 max-w-md">
          Discover personalized book recommendations, just like a tea sommelier curates the perfect matcha blend for you!
        </p>
        <Link
          to="/quiz"
          className="bg-matcha-dark dark:bg-night-library text-white py-2 px-4 rounded shadow hover:bg-matcha-light hover:text-matcha-dark border border-matcha-dark"
        >
          Start Your Personalized Pairing
        </Link>
      </div>
    </div>
  );
}

export default Home;

