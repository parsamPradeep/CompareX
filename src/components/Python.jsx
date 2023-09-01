import { useContext } from "react";
import AppContext from "../App";
const Python = () => {
  const { width } = useContext(AppContext);
  return <div style={{ marginLeft: width }}>python page</div>;
};

export default Python;
