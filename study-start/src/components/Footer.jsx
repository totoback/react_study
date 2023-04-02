import React, { useContext } from "react";
import { ThemaContext } from "../contexts/ThemaContext";

export default function Footer() {
  const {isDark,setIsDark} = useContext(ThemaContext)
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
