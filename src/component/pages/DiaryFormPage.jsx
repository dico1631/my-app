import { Link } from 'react-router-dom';

import PointSelector from "../PointSelector";
import { useState } from 'react';

const DiaryFormPage = () => {
  const [point, setPoint] = useState(0);

  const submitNewDiary = e => {
    e.preventDefault();
    console.log(e.state.value)
  };

  return(
    <form onSubmit={submitNewDiary}>
      <dl>
        <dt>별점</dt>
        <span>선택별점: {point}</span>
        <PointSelector setPoint={setPoint}/>
        <dt>제목</dt>
        <input type="text"></input>
        <dt>내용</dt>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </dl>
      <button><Link to="/">취소</Link></button>
      <input type='submit' value={"오늘의 일기 등록"}></input>
    </form>
  )
};

export default DiaryFormPage;
