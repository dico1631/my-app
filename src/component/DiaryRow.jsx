const DiaryRow = ({ diary, setPopupText, setAlert }) => {
  const deleteDiary = event => {
    setPopupText('일기를 삭제하시겠습니까?');
    setAlert(true);
  };

  return (
    <tr>
      <td>{diary.date}</td>
      <td>{diary.point}</td>
      <td>{diary.title}</td>
      <td><button onClick={deleteDiary}>삭제</button></td>
    </tr>
  );
};

export default DiaryRow;
