const AlertPopup = ({ popupText, setAlert }) => {
  const closePopup = () => setAlert(false);
  const deleteDiary = () => {
    // 일기 삭제 로직
    setAlert(false);
  };


  return(
    <aside>
      <span>{popupText}</span>
      <button onClick={closePopup}>취소</button>
      <button onClick={deleteDiary}>확인</button>
    </aside>
  );
};

export default AlertPopup;
