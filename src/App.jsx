import diaryData from "./diary.json";

import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";

import DiaryListPage from "./component/pages/DiaryListPage";
import DiaryDetailPage from "./component/pages/DiaryDetailPage";

const diarys = diaryData.diaryData;

const App = () => (
  <div>
    <Header />
    <main>
      <DiaryListPage diarys={diarys} />
      <DiaryDetailPage diarys={diarys} />
    </main>
    <Footer />
  </div>
);

export default App;
