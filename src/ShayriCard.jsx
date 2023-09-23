import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

function ShayriCard() {
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    // Add the glowing class when the component mounts
    setIsGlowing(true);

    // Remove the glowing class after a delay (e.g., 3 seconds)
    const timeoutId = setTimeout(() => {
      setIsGlowing(false);
    }, 3000);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="App">
      <h1 className={isGlowing ? 'glow' : ''}>Glowing Heading</h1>
    </div>
  );
}

export default ShayriCard;
