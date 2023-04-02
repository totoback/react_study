import React, { useContext } from "react";
import { ThemaContext } from "../contexts/ThemaContext";

export default function Contents() {
  const { isDark } = useContext(ThemaContext);
  
  return (
    <div
      className="contents"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>홍길동님, 오늘도 좋은 하루 되세요!!</p>
    </div>
  );
}
