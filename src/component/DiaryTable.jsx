import React from 'react';

import DiaryTableHeader from './DiaryTableHeader';
import DiaryTableBody from './DiaryTableBody';

const DiaryTable = ({ diarys, setPopupText, setAlert, setOriginalData }) => (
  <table>
    <DiaryTableHeader />
    <DiaryTableBody diarys={diarys} setPopupText={setPopupText} setAlert={setAlert} setOriginalData={setOriginalData}/>
  </table>
);

export default DiaryTable;
