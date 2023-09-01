import { HomeContext } from "./Home";
import { useContext, useState, useEffect } from "react";
import { getPossibleDropdownValues } from "../utils/utils";
const Search = ({ data, setSelectedMonth }) => {
  const { allSelectedValues } = useContext(HomeContext);
  const [dropDownValues, setDropDownValues] = useState([]);
  const [filteredValues, setFilteredValues] = useState([]);
  const [hideDropDown, setHideDropDown] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState();
  const months = [...Object.keys(data), "Overall"];

  useEffect(() => {
    const values = getPossibleDropdownValues(months, allSelectedValues);
    setDropDownValues(values);
    setFilteredValues(values);
  }, []);
  let onTypeHandler = (value) => {
    let tempFiltered = dropDownValues.filter((item) => {
      return item.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    setInputValue(value);
    setFilteredValues(tempFiltered);
    setHideDropDown(false);
  };
  const handleOnSelectValue = (e, index, value) => {
    e.preventDefault();
    setInputValue(value);
    setSelectedIndex(index);
    setHideDropDown(true);
  };
  const onBlurHandler = () => {
    setTimeout(() => setHideDropDown(true), 1000);
  };
  const onSearch = () => {
    setSelectedMonth(months[selectedIndex]);
  };
  return (
    <div>
      <div className="serachBarContainer">
        <input
          type="text"
          placeholder="Search.."
          className="input"
          onChange={(e) => onTypeHandler(e.target.value)}
          onBlur={() => onBlurHandler()}
          value={inputValue}
        />
        <button onClick={() => onSearch()} className="searchBtn" type="submit">
          Search
        </button>
      </div>
      <div
        className="dropdownContainer"
        style={{ visibility: hideDropDown ? "hidden" : "unset" }}
      >
        {filteredValues.map((value, inx) => (
          <button
            key={inx}
            className="searchValues"
            onClick={(e) => handleOnSelectValue(e, inx, value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Search;
