import PropTypes from 'prop-types';

const DiaryRow = ({diary}) => {
  return(
    <tr key={diary.diaryId}>
      <td>{diary.date}</td>
      <td>{diary.point}</td>
      <td>{diary.title}</td>
      <td><button>삭제</button></td>
    </tr>
    )
};

DiaryRow.propTypes = {
  diary: PropTypes.object.isRequired
};

export default DiaryRow;
