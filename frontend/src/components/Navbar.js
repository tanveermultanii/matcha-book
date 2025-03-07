import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-matcha-dark dark:bg-night-library text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MatchaBook</h1>
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:text-matcha-light">Home</Link>
        <Link to="/recommendations" className="hover:text-matcha-light">Recommendations</Link>
        <Link to="/favorites" className="hover:text-matcha-light">Favorites</Link>

        <button
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center bg-white dark:bg-night-library border rounded-full shadow"
        >
          {theme === 'light' ? '🌞' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
