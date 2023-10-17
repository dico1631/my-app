const TextFilter = ({ searchText, setSearchText }) => {
  const changeText = event => setSearchText(event.target.value);

  const search = () => {
    
  };

  return (
    <div>
      <input type='text' name='' id='' value={searchText} onChange={changeText} placeholder='제목, 내용을 입력해주세요. '/>
      <button type="button" onClick={search()}>검색</button>
    </div>
  );
};

export default TextFilter;
