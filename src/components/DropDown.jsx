import { useState, useContext } from "react";
import { HomeContext } from "./Home";

const DropDown = ({ data, updateSelected }) => {
  const { allSelectedValues: allSelected } = useContext(HomeContext);
  const [selectedValue, setSelectedValue] = useState();

  const onChangedler = (event) => {
    let value = event?.target?.value;
    if (!allSelected.includes(value)) {
      setSelectedValue(value);
      updateSelected(selectedValue, value);
    } else {
      alert(
        "Product is already selected for comparision please select other option."
      );
    }
  };

  return (
    <div>
      <select
        className="dropDown"
        value={selectedValue}
        onChange={(e) => onChangedler(e)}
      >
        <option value="select">---Select an Product--</option>
        {data.map((item, inx) => (
          <option key={inx} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
