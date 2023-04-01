import React from "react";

export default function Contents({ isDark }) {
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
