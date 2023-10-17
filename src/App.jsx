import { BrowserRouter, Routes, Route } from 'react-router-dom';

import diaryData from "./diary.json";

import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";

import DiaryListPage from "./component/pages/DiaryListPage";
import DiaryDetailPage from "./component/pages/DiaryDetailPage";

const diarys = diaryData.diaryData;

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<DiaryListPage diarys={diarys} />}/>
          <Route path='/detail' element={<DiaryDetailPage diarys={diarys} />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
