import DropDown from "./DropDown";
import Search from "./Search";
import dropDownData from "../utils/DropdownConstants";
import productsData from "../utils/mockData";
import ComparisionCard from "./ComparisonCard";
import { useState, createContext, useContext } from "react";
import { getAllPermutations } from "../utils/utils";
import AppContext from "../App";
import AddDelete from "./AddDelete";
export const HomeContext = createContext(null);

const Home = () => {
  const [currentDropDowns, setcurrentDropDowns] = useState(2);
  const [allSelectedDropDownVales, setAllSelectedDropDownVales] = useState([]);
  const [allPermutation, setAllPermutation] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState();
  const { width } = useContext(AppContext);

  const updateSelectedDropDownValues = (previous, current) => {
    let tempData = allSelectedDropDownVales;
    if (tempData.includes(previous)) {
      let index = tempData.indexOf(previous);
      tempData.splice(index, 1);
    }
    tempData.push(current);
    let tempPermutations = getAllPermutations(tempData);

    setAllPermutation(tempPermutations);
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
  let contextValue = {
    allSelectedValues: allSelectedDropDownVales,
    permutations: allPermutation,
  };

  return (
    <div className="home" style={{ marginLeft: width }}>
      <HomeContext.Provider value={contextValue}>
        <div>
          <div className="prodDdContainder">
            {getCurrentDropDowns()}
            <div>
              <AddDelete
                setcurrentDropDowns={setcurrentDropDowns}
                currentDropDowns={currentDropDowns}
              />
            </div>
          </div>
          <div>
            <Search
              data={productsData.monthly_comparison}
              setSelectedMonth={setSelectedMonth}
            />
          </div>
          <div id="comparisonReport">
            <ComparisionCard
              selectedMonth={selectedMonth}
              prodData={productsData.monthly_comparison}
            />
          </div>
        </div>
      </HomeContext.Provider>
    </div>
  );
};

export default Home;
