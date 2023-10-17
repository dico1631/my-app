import DiaryRow from './DiaryRow';

const DiaryTableBody = ({ diarys, setPopupText, setAlert }) => (
  <tbody>
    {
      diarys.map(diary => (
        <DiaryRow key={diary.diaryId} diary={diary} setPopupText={setPopupText} setAlert={setAlert}/>
      ))
    }
  </tbody>
);

export default DiaryTableBody;
