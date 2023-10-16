const TextFilter = ({searchText, setSearchText}) => {

  const changeText = event => setSearchText(event.target.value);

  return (
    <input type="text" name="" id="" value={searchText} onChange={changeText} placeholder="제목, 내용을 입력해주세요. "/>
  );
};

export default TextFilter;