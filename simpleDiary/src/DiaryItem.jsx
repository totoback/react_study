import React from "react";

export default function DiaryItem({
  author,
  content,
  created_date,
  emotion,
  id,
}) {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 {emotion}
        </span>
        <br />
        <span className="date">
          {new Date(created_date).toLocaleDateString()}
        </span>
      </div>
      <div>
        <div className="content">{content}</div>
      </div>
    </div>
  );
}
