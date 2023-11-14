const AlertPopup = ({ popupText, setAlert }) => {
  const closePopup = () => {
    setAlert(false);
    return false;
  };
  const confirmLogic = () => {
    setAlert(false);
    return true;
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
