import DiaryRow from './DiaryRow';

const DiaryTableBody = ({ diarys, setPopupText }) => (
  <tbody>
    {
      diarys.map(diary => (
        <DiaryRow key={diary.diaryId} diary={diary} setPopupText={setPopupText}/>
      ))
    }
  </tbody>
);

export default DiaryTableBody;
