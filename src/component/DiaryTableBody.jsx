import DiaryRow from './DiaryRow';

const DiaryTableBody = ({ diarys, setPopupText, setAlert, setOriginalData }) => (
  <tbody>
    {
      diarys.map(diary => (
        <DiaryRow key={diary.diaryId} diary={diary} setPopupText={setPopupText} setAlert={setAlert} setOriginalData={setOriginalData}/>
      ))
    }
  </tbody>
);

export default DiaryTableBody;
