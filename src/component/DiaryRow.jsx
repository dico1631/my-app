import PropTypes from 'prop-types';

const DiaryRow = ({ diary, setPopupText }) => {
  const deleteDiary = event => {
    setPopupText('일기를 삭제하시겠습니까?');
    // 팝업 노출
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

// DiaryRow.propTypes = {
//   diary: PropTypes.object.isRequired
// };

export default DiaryRow;
