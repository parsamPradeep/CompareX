import { FaHome, FaPython, FaRProject, FaJava } from "react-icons/fa";
const dropDownObject = [
  {
    name: "Product A",
    value: "A",
    isDisabled: false,
  },
  {
    name: "Product B",
    value: "B",
    isDisabled: false,
  },
  {
    name: "Product C",
    value: "C",
    isDisabled: false,
  },
  {
    name: "Product D",
    value: "D",
    isDisabled: false,
  },
];

export const sideBarObj = [
  {
    name: "Home",
    icon: <FaHome />,
    link: "/",
  },
  {
    name: "Python",
    icon: <FaPython />,
    link: "/python",
  },
  {
    name: "R",
    icon: <FaRProject />,
    link: "/r",
  },
  {
    name: "Java",
    icon: <FaJava />,
    link: "/java",
  },
];

export default dropDownObject;
