import DiaryRow from "./DiaryRow";

const DiaryTableBody = ({diarys}) => {
  return(
    <tbody>
      {
        diarys.map((diary) => (
          <DiaryRow diary={diary}/>
        ))
      }
    </tbody>
  );
};

export default DiaryTableBody;