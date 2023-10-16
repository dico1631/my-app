import diaryData from "./diary.json"

import { Routes, Route } from 'react-router-dom';

import DiaryListPage from "./component/DiaryListPage";

const diarys = diaryData.diaryData;

const App = () => {
  return (
    <div>
      <h1>나의 일기</h1>
      <Routes>
        <DiaryListPage diarys={diarys} />
      </Routes>
    </div>
  ); 
}

export default App;