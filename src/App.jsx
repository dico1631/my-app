import diaryData from "./diary.json"
const diarys = diaryData.diaryData;

const App = () => {
  return (
    <div>
      <h1>나의 일기</h1>
      <table>
        <thead>
          <tr>
            <th>작성일자</th>
            <th>별점</th>
            <th>제목</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {
            diarys.map((diary, idx) => (
              
              <tr>
                <td>{diary.date}</td>
                <td>{diary.point}</td>
                <td>{diary.title}</td>
                <td><button>삭제</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;