import DiaryTableHeader from "./DiaryTableHeader";
import DiaryTableBody from "./DiaryTableBody";

const DiaryTable = ({diarys}) => {
  return(
    <table>
      <DiaryTableHeader />
      <DiaryTableBody diarys={diarys}/>
    </table>
  );
};

export default DiaryTable;