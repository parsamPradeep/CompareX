import { useContext } from "react";
import AppContext from "../App";
const R = () => {
  const { width } = useContext(AppContext);
  return (
    <div style={{ marginLeft: width }}>
      R page
      <iframe src="https://www.python.org/" is="x-frame-bypass"></iframe>
    </div>
  );
};

export default R;
