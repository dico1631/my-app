const PointSeletor = ({ setPoint, setResponseBody }) => {

  const changePoint = event => {
    const selectValue = event.target.value;
    setPoint(selectValue);
    setResponseBody(prev => ({...prev, ["point"]: selectValue}));
  };

  return (
    <ol>
      <li><button type="button" value={1} onClick={changePoint}>1</button></li>
      <li><button type="button" value={2} onClick={changePoint}>2</button></li>
      <li><button type="button" value={3} onClick={changePoint}>3</button></li>
      <li><button type="button" value={4} onClick={changePoint}>4</button></li>
      <li><button type="button" value={5} onClick={changePoint}>5</button></li>
    </ol>
  );
};

export default PointSeletor;
