import diaryData from "./diary.json"

import PointFilter from "./component/PointFilter";
import DiaryTable from "./component/DiaryTable";

import { useState } from "react";

const diarys = diaryData.diaryData;

const App = () => {

  const [point, setPoint] = useState(0);
  const fliteredDiarys = diarys.filter(diary => diary.point >= point);

  return (
    <div>
      <h1>나의 일기</h1>
      <PointFilter point={point} setPoint={setPoint}/>
      <DiaryTable diarys={fliteredDiarys} />
    </div>
  );
}

export default App;