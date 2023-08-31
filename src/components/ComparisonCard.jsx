const ComparisionCard = ({ headerTitle, prodData }) => {
  console.log(Object.keys(prodData));
  return (
    <div className="cardContainer">
      <div className="cardHeader">
        <h2>{headerTitle}</h2>
      </div>
      <ul className="listContainer">
        {Object.keys(prodData).map((monthData) =>
          Object.keys(prodData[monthData]).map((prodComp) =>
            prodData[monthData][prodComp].map((item, inx) => (
              <li className="listItem" key={inx}>
                {item}
              </li>
            ))
          )
        )}
      </ul>
    </div>
  );
};

export default ComparisionCard;
