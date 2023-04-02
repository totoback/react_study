import React, { useContext } from "react";
import { ThemaContext } from '../contexts/ThemaContext'

export default function Header() {
  const {isDark} = useContext(ThemaContext);
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome! 홍길동</h1>
    </header>
  );
}
