import React from 'react';

import DiaryTableHeader from './DiaryTableHeader';
import DiaryTableBody from './DiaryTableBody';

const DiaryTable = ({ diarys, setPopupText, setAlert }) => (
  <table>
    <DiaryTableHeader />
    <DiaryTableBody diarys={diarys} setPopupText={setPopupText} setAlert={setAlert}/>
  </table>
);

export default DiaryTable;
