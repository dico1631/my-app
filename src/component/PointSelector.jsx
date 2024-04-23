const PointSelector = ({setPoint}) => {

  const selectPoint = e => setPoint(e.target.value);

  return (
    <>
      <ol>
        <li><button value={1} onClick={selectPoint}>1</button></li>
        <li><button value={2} onClick={selectPoint}>2</button></li>
        <li><button value={3} onClick={selectPoint}>3</button></li>
        <li><button value={4} onClick={selectPoint}>4</button></li>
        <li><button value={5} onClick={selectPoint}>5</button></li>
      </ol>
    </>
  );
};

export default PointSelector;
