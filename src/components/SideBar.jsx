import { useState } from "react";
import { FaHome, FaPython, FaRProject, FaJava } from "react-icons/fa";
const SideBar = ({ setWidth }) => {
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
      <a href="#">
        <FaHome />{" "}
        <span
          className="itemName"
          style={{ visibility: hide ? "hidden" : "unset" }}
        >
          Home
        </span>
      </a>
      <a href="#">
        <FaPython />
        <span
          className="itemName"
          style={{ visibility: hide ? "hidden" : "unset" }}
        >
          Python
        </span>
      </a>
      <a href="#">
        <FaRProject />
        <span
          className="itemName"
          style={{ visibility: hide ? "hidden" : "unset" }}
        >
          R
        </span>
      </a>
      <a href="#">
        <FaJava />
        <span
          className="itemName"
          style={{ visibility: hide ? "hidden" : "unset" }}
        >
          Java
        </span>
      </a>
    </div>
  );
};

export default SideBar;
