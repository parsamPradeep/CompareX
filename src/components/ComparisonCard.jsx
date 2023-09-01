import { HomeContext } from "./Home";
import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { getAllPermutationData } from "../utils/utils";
const ComparisionCard = ({ prodData, selectedMonth }) => {
  const { permutations } = useContext(HomeContext);
  const months = Object.keys(prodData);
  console.log(selectedMonth);
  const getMonthComparision = () => {
    let compareData = getAllPermutationData(
      prodData,
      selectedMonth,
      permutations
    );
    let compareElement = [];
    compareData.map((item) =>
      compareElement.push(
        <li className="listItem" key={uuid()}>
          {item}
        </li>
      )
    );
    if (compareData.length == 0) {
      compareElement.push(
        <div className="noDataText" key={uuid()}>
          No Products comparison available on this month.
        </div>
      );
    }
    return compareElement;
  };

  const getOverAllComparison = () => {
    let compareData = [];
    months.map((month) => {
      let monthComparData = getAllPermutationData(
        prodData,
        month,
        permutations
      );
      if (monthComparData.length != 0) compareData.push(monthComparData);
    });

    let compareElement = [];
    compareData.map((data) =>
      data.map((item) =>
        compareElement.push(
          <li className="listItem" key={uuid()}>
            {item}
          </li>
        )
      )
    );
    if (compareData.length == 0) {
      compareElement.push(
        <div className="noDataText" key={uuid()}>
          No Overall comparison available on selected products.
        </div>
      );
    }
    return compareElement;
  };
  return (
    <div>
      {selectedMonth && selectedMonth != "Overall" && (
        <div className="cardContainer">
          <div className="cardHeader">
            <h2>{selectedMonth + " Month Comparison"}</h2>
          </div>
          <ul className="listContainer">{getMonthComparision()}</ul>
        </div>
      )}
      <div className="cardContainer">
        <div className="cardHeader">
          <h2>{"Overall Comparison"}</h2>
        </div>
        <ul className="listContainer">{getOverAllComparison()}</ul>
      </div>
    </div>
  );
};

export default ComparisionCard;
