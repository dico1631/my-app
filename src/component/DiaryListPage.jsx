
import { useState } from "react";

const DiaryListPage  = ({diarys}) => {

    const [point, setPoint] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [popupText, setPopupText] = useState("알림 팝업");
    const fliteredDiarys = diarys.filter(diary => {
      return diary.point >= point || 
      diary.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) || 
      diary.content.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    });

    return (
      <>
        <SearchBar point={point} setPoint={setPoint} searchText={searchText} setSearchText={setSearchText}/>
        <DiaryTable diarys={fliteredDiarys} setPopupText={setPopupText}/>
        <AlertPopup popupText={popupText}/>
      </>
    );
  };
  
  export default DiaryListPage;