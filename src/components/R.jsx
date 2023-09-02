import { useContext } from "react";
import AppContext from "../App";
const R = () => {
  const { width } = useContext(AppContext);
  return <div style={{ marginLeft: width }}>R page</div>;
};

export default R;
