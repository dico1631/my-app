import { useRef } from 'react';
import { Link } from 'react-router-dom';

const DiaryRow = ({ diary, setPopupText, setAlert, setOriginalData }) => {


  // const deleteConfirm = () => {
  //   setPopupText('일기를 삭제하시겠습니까?');
  //   setAlert(true);
  // };

  const deleteDiary = (targetId) => {
    if(confirm("삭제하시겠습니까?")){
      setOriginalData((prevData) => {
        const deletedData = prevData.filter(data => data.diaryId != targetId);
        console.log(deletedData);
        console.log(prevData);
        return deletedData;
      })
    }
  };

  return (
    <tr id={diary.diaryId}>
      <td>{diary.date}</td>
      <td>{diary.point}</td>
      <td><Link key={diary.diaryId} to={`/detail/${diary.diaryId}`}>{diary.title}</Link></td>
      <td><button onClick={() => deleteDiary(diary.diaryId)}>삭제</button></td>
    </tr>
  );
};

export default DiaryRow;
