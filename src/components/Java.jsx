import { useContext } from "react";
import AppContext from "../App";
const Java = () => {
  const { width } = useContext(AppContext);
  return <div style={{ marginLeft: width }}>java page</div>;
};

export default Java;
