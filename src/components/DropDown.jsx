import { useState, useContext } from "react";
import { SelectedValuesContext } from "./Home";
const DropDown = ({ data, updateSelected }) => {
  const allSelected = useContext(SelectedValuesContext);
  console.log(allSelected, " from dropdowns");
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
        {data.map((item) => (
          <option value={item.value}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
