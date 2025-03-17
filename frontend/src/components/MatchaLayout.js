import React from 'react';

function MatchaLayout({ children }) {
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

      {/* Main content goes here */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center p-4">
        {children}
      </div>
    </div>
  );
}

export default MatchaLayout;
