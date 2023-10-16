import DiaryTableHeader from "./DiaryTableHeader";
import DiaryTableBody from "./DiaryTableBody";

const DiaryTable = ({diarys, setPopupText}) => {
  return(
    <table>
      <DiaryTableHeader />
      <DiaryTableBody diarys={diarys} setPopupText={setPopupText}/>
    </table>
  );
};

export default DiaryTable;