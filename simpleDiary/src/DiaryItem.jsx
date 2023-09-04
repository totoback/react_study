import React, { useEffect, useRef, useState } from "react";

function DiaryItem({
  author,
  content,
  created_date,
  emotion,
  id,
  onRemove,
  onEdit,
}) {
  useEffect(()=>{
    console.log(`${id}번째 아이템 렌더`)
  })
  //블리언값
  const [isEdit, setIsEdit] = useState(false);
  // 수정하기 토글버튼
  const toggleIsEdit = () => setIsEdit(!isEdit); //true 반전연산
  //textarea = content
  const [localContent, setLocalContent] = useState(content);
  const localContentinput = useRef();
  //삭제하기 버튼
  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) onRemove(id);
  };
  //수정 취소
  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };
  //수정된 데이터 바꾸기
  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentinput.current.focus();
      return;
    }
    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

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
        <div className="content">
          {isEdit ? (
            <>
              <textarea
                value={localContent}
                onChange={(e) => setLocalContent(e.target.value)}
              />
            </>
          ) : (
            <> {content}</>
          )}
        </div>
        {isEdit ? (
          <>
            <button className="btn_remove" onClick={handleQuitEdit}>
              수정 취소
            </button>
            <button className="btn_edit" onClick={handleEdit}>
              수정 완료
            </button>
          </>
        ) : (
          <>
            <button className="btn_remove" onClick={handleRemove}>
              삭제하기
            </button>
            <button className="btn_edit" onClick={toggleIsEdit}>
              수정하기
            </button>
          </>
        )}
      </div>
    </div>
  );
}
export default React.memo(DiaryItem);