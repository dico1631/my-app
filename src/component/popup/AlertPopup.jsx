const AlertPopup = ({ popupText }) => (
  <aside>
    <span>{popupText}</span>
    <button>취소</button>
    <button>확인</button>
  </aside>
);

export default AlertPopup;