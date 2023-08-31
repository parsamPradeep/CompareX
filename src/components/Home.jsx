import Header from "./Header";
import DropDown from "./DropDown";
import Search from "./Search";
import dropDownData from "../utils/DropdownConstants";
import productsData from "../utils/mockData";
import ComparisionCard from "./ComparisonCard";
import { useState, createContext } from "react";
export const SelectedValuesContext = createContext(null);
const Home = ({ width }) => {
  const [currentDropDowns, setcurrentDropDowns] = useState(2);
  const [allSelectedDropDownVales, setAllSelectedDropDownVales] = useState([]);

  const updateSelectedDropDownValues = (previous, current) => {
    let tempData = allSelectedDropDownVales;
    if (tempData.includes(previous)) {
      let index = tempData.indexOf(previous);
      tempData.splice(index, 1);
    }
    tempData.push(current);
    setAllSelectedDropDownVales(tempData);
  };
  const getCurrentDropDowns = () => {
    let dropDowns = [];
    for (let i = 0; i < currentDropDowns; i++)
      dropDowns.push(
        <DropDown
          key={i}
          data={dropDownData}
          updateSelected={updateSelectedDropDownValues}
        />
      );
    return dropDowns;
  };
  return (
    <div className="home" style={{ marginLeft: width }}>
      <SelectedValuesContext.Provider value={allSelectedDropDownVales}>
        <Header />
        <div>
          <div className="prodDdContainder">{getCurrentDropDowns()}</div>
          <div>
            <Search />
          </div>
          <div>
            <ComparisionCard
              headerTitle="August Comparision"
              prodData={productsData.monthly_comparison}
            />
          </div>
        </div>
      </SelectedValuesContext.Provider>
      Home Page
    </div>
  );
};

export default Home;
