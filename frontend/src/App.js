import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recommendations from './pages/Recommendations';
import Favorites from './pages/Favorites';
import Quiz from './pages/Quiz';
import MatchaLayout from './components/MatchaLayout';
import { ThemeProvider } from './context/ThemeContext';
import Search from './pages/Search';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col justify-between text-matcha-dark dark:text-night-text">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<MatchaLayout><Home /></MatchaLayout>}/>
              <Route path="/recommendations" element={<Recommendations />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/quiz" element={<MatchaLayout><Quiz /></MatchaLayout>} />
              <Route path="/search" element={<Search />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </main>
          <div className="relative">
            <Footer />
            <img
              src="/images/smiski.png"
              alt="Smiski"
              className="absolute -top-8 right-4 w-20 h-20 opacity-90 hover:opacity-100 
                        transition-transform duration-300 hover:animate-wiggle 
                        drop-shadow-lg z-50"
            />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

