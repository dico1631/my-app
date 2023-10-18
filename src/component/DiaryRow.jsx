import { Link } from 'react-router-dom';

const DiaryRow = ({ diary, setPopupText, setAlert }) => {
  const deleteConfirm = () => {
    setPopupText('일기를 삭제하시겠습니까?');
    setAlert(true);
  };

  const deleteDiary = () => {
    
  };

  return (
    <tr>
      <td>{diary.date}</td>
      <td>{diary.point}</td>
      <td><Link to={`/detail/${diary.diaryId}`}>{diary.title}</Link></td>
      <td><button onClick={deleteConfirm}>삭제</button></td>
    </tr>
  );
};

export default DiaryRow;
