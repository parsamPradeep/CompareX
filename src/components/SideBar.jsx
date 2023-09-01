import { useState, useContext } from "react";
import { FaHome, FaPython, FaRProject, FaJava } from "react-icons/fa";
import { Link } from "react-router-dom";
import AppContext from "../App";
const SideBar = () => {
  const { setWidth } = useContext(AppContext);
  const [sideBarWidth, setSideBarWidth] = useState();
  const [hide, setHide] = useState(true);
  return (
    <div
      id="mySidenav"
      className="sidenav"
      style={{ width: sideBarWidth }}
      onMouseEnter={() => {
        setWidth("125px");
        setSideBarWidth("150px");
        setHide(false);
      }}
      onMouseLeave={() => {
        setWidth("25px");
        setSideBarWidth("50px");
        setHide(true);
      }}
    >
      <Link to="/">
        <FaHome />{" "}
        <span
          className="itemName"
          style={{ visibility: hide ? "hidden" : "unset" }}
        >
          Home
        </span>
      </Link>
      <Link to="/python">
        <FaPython />
        <span
          className="itemName"
          style={{ visibility: hide ? "hidden" : "unset" }}
        >
          Python
        </span>
      </Link>
      <Link to="/r">
        <FaRProject />
        <span
          className="itemName"
          style={{ visibility: hide ? "hidden" : "unset" }}
        >
          R
        </span>
      </Link>
      <Link to="java">
        <FaJava />
        <span
          className="itemName"
          style={{ visibility: hide ? "hidden" : "unset" }}
        >
          Java
        </span>
      </Link>
    </div>
  );
};

export default SideBar;
