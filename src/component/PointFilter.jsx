const PointFilter = ({ point, setPoint }) => {
  const changePoint = event => setPoint(event.target.value);

  return (
    <>
      <h2>별점: {point}</h2>
      <ol>
        <li><button type="button" value={0} onClick={changePoint}>별점 전체</button></li>
        <li><button type="button" value={1} onClick={changePoint}>1</button></li>
        <li><button type="button" value={2} onClick={changePoint}>2</button></li>
        <li><button type="button" value={3} onClick={changePoint}>3</button></li>
        <li><button type="button" value={4} onClick={changePoint}>4</button></li>
        <li><button type="button" value={5} onClick={changePoint}>5</button></li>
      </ol>
    </>
  );
};

export default PointFilter;
