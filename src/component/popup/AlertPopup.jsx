const AlertPopup = ({ popupText, setAlert }) => {
  const closePopup = () => setAlert(false);
  const confirmLogic = () => {
    // 일기 삭제 로직
    setAlert(false);
  };


  return(
    <aside>
      <span>{popupText}</span>
      <button onClick={closePopup}>취소</button>
      <button onClick={confirmLogic}>확인</button>
    </aside>
  );
};

export default AlertPopup;
