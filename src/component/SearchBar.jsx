import PointFilter from "./PointFilter";
import TextFilter from "./TextFilter";

const SearchBar = ({point, setPoint, searchText, setSearchText}) => {

  return (
    <>
      <PointFilter point={point} setPoint={setPoint}/>
      <TextFilter searchText={searchText} setSearchText={setSearchText}/>
    </>
  );
};

export default SearchBar;