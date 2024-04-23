import { useState } from "react";
import { Link } from 'react-router-dom';

import PointSeletor from "../PointSeletor";
import { useLocation } from "react-router-dom/dist";

const DiaryFormPage = () => {

  const location = useLocation();
  const nowDiaryOrder = location.state.diaryLength;

  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const [point, setPoint] = useState('');

  const formData = {diaryId: nowDiaryOrder + 1, point: 0, title: "", content: "", data: formattedDate};
  const [responseBody, setResponseBody] = useState(formData);

  const putFormData = event => {
    const {name, value} = event.target;
    setResponseBody({...responseBody, [name]: value});
  };

  const submitNewDiary = event => {
    event.preventDefault();
    //setOriginalData(prev => (prev.push(responseBody)));
    console.log(responseBody);
  };

  return(
    <form onSubmit={submitNewDiary}>
      <h1>{formattedDate.replaceAll('-', '.')}</h1>
      <span>별점: {point}</span>
      <PointSeletor setPoint={setPoint} setResponseBody={setResponseBody}/>

      <div>
        <label htmlFor="DiaryTitle">제목</label>
        <input type="text" name="title" id="DiaryTitle" onChange={putFormData} placeholder="제목을 입력해주세요."/>
      </div>

      <div>
        <label htmlFor="DiaryContent">내용</label>
        <textarea name="content" id="DiaryContent" cols="30" rows="10" onChange={putFormData} placeholder="내용을 입력해주세요."></textarea>
      </div>
      <button type="button"><Link to="/">취소</Link></button>
      <button type="submit">오늘의 일기 등록</button>
    </form>
  )
};

export default DiaryFormPage;
