import React, { useState, useEffect } from 'react';

const TypingText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true); // Estado para mostrar/ocultar el cursor

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
        setShowCursor(false);
        if (index < text.length-1) {
            setDisplayedText((prev) => prev + text[index]);
            index++;
        } else {
            clearInterval(interval);
        }
    }, speed);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [text, speed]);

  return    <p>
                {displayedText}
                {showCursor && <span className="typing-cursor"></span>}
            </p>;
};

export default TypingText;
