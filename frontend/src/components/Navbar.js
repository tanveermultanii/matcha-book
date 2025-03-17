import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className="bg-matcha-dark text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>MatchaBook</h1>
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:text-matcha-light">Home</Link>
        <Link to="/recommendations" className="hover:text-matcha-light">Recommendations</Link>
        <Link to="/favorites" className="hover:text-matcha-light">Favorites</Link>
        <Link to="/search" className="hover:text-matcha-light">Search</Link>

        
      </div>
    </nav>
  );
}

export default Navbar;
