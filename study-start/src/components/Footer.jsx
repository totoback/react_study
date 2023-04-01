import React from "react";

export default function Footer({ isDark, setIsDark }) {
  const toggleThema = () => {
    setIsDark(!isDark);
  };
  return (
    <footer
      className="footer"
      style={{ backgroundColor: isDark ? "black" : "white" }}
    >
      <button className="button" onClick={toggleThema}>
        Dark Mode
      </button>
    </footer>
  );
}
