import React from 'react';

import DiaryTableHeader from './DiaryTableHeader';
import DiaryTableBody from './DiaryTableBody';

const DiaryTable = ({ diarys, setPopupText }) => (
  <table>
    <DiaryTableHeader />
    <DiaryTableBody diarys={diarys} setPopupText={setPopupText}/>
  </table>
);

export default DiaryTable;
