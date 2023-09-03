import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { sideBarObj } from "../utils/constants";
import AppContext from "../App";
const SideBar = () => {
  const { setWidth } = useContext(AppContext);
  const [sideBarWidth, setSideBarWidth] = useState();
  const [isHidden, setIsHidden] = useState(true);
  const onMouseMove = () => {
    setWidth("125px");
    setSideBarWidth("150px");
    setIsHidden(false);
  };
  const onMouseOut = () => {
    setWidth("25px");
    setSideBarWidth("50px");
    setIsHidden(true);
  };
  return (
    <div
      id="mySidenav"
      className="sidenav"
      style={{ width: sideBarWidth }}
      onMouseEnter={onMouseMove}
      onMouseLeave={onMouseOut}
    >
      {sideBarObj.map((item, inx) => (
        <Link to={item.link} key={inx}>
          {item.icon}
          <span
            className="itemName"
            style={{ visibility: isHidden ? "hidden" : "unset" }}
          >
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
