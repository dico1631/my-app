import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";

import DiaryListPage from "./component/pages/DiaryListPage";
import DiaryFormPage from "./component/pages/DiaryFormPage";
import DiaryDetailPage from "./component/pages/DiaryDetailPage";
import DiaryFormPage from './component/pages/DiaryFormPage';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<DiaryListPage />}/>
          <Route path='/form' element={<DiaryFormPage />}/>
          <Route path='/detail/:id' element={<DiaryDetailPage />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
