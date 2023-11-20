import { useParams } from "react-router-dom";
import diarys from "../fetch/fetchDiary";

const DiaryDetailPage = () => {
  const params = useParams();
  const nowDiaryId = params.id;
  const filteredDiary = diarys.filter(diary => diary.diaryId == nowDiaryId)[0];
  let starPoint = "";
  for(let i=0; i<filteredDiary.point; i++){
    starPoint += "*"
  }
  return(
    <>
      <h1>{filteredDiary.date}</h1>
      <span>{starPoint}</span>
      <dl>
        <dt>제목</dt>
        <dd>{filteredDiary.title}</dd>
        <dt>내용</dt>
        <dd>{filteredDiary.content}</dd>
      </dl>
    </>
  )
};

export default DiaryDetailPage;
