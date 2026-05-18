import { useState, useEffect } from "react";
import './errorMessage.css';

function ErrorMessage() {
  const colors = ["red", "orange", "yellow", "orange"];
  const [color1, setColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((p) => (p + 1) % colors.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="error-container">
      <h1 style={{ color: colors[color1] }}>=(</h1>
      <p style={{ color: colors[color1] }}>Error.. No se encontró la película</p>
    </div>
  );
}

export default ErrorMessage;