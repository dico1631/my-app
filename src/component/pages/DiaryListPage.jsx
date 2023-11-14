
import { useState } from "react";

import diarys from "../fetch/fetchDiary";

import { AllProps } from '../../types/prop-types';

import SearchBar from "../SearchBar";
import DiaryTable from "../DiaryTable";
// import AlertPopup from "../popup/AlertPopup";

const DiaryListPage = () => {
  const [originalData, setOriginalData] = useState(diarys);
  const [point, setPoint] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [popupText, setPopupText] = useState('알림 팝업');
  const [alert, setAlert] = useState(false);
  const fliteredDiarys = originalData.filter((diary) =>
    diary.point >= point &&
    (diary.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) || diary.content.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
  );

  return (
    <>
      <SearchBar point={point} setPoint={setPoint} searchText={searchText} setSearchText={setSearchText}/>
      <DiaryTable diarys={fliteredDiarys} setPopupText={setPopupText} setAlert={setAlert} setOriginalData={setOriginalData}/>
      {/* {alert && <AlertPopup popupText={popupText} setAlert={setAlert} diarys={diarys}/>} */}
    </>
  );
};

DiaryListPage.propTypes = AllProps;

export default DiaryListPage;
