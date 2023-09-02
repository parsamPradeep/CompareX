import addSvg from "../utils/add.svg";
import removeSvg from "../utils/remove.svg";
import { ToastContainer, toast } from "react-toastify";
import "./AddDelete";
import "react-toastify/dist/ReactToastify.css";
const MIN_PRODUCTS = 1;
const MAX_PRODUCTS = 4;

const AddDelete = ({ currentDropDowns, setcurrentDropDowns }) => {
  const notify = (message) => {
    toast(message, { type: toast.TYPE.WARNING });
  };
  return (
    <div className="addDeleteContainer">
      <button
        className="addProd"
        onClick={() =>
          currentDropDowns + 1 <= MAX_PRODUCTS
            ? setcurrentDropDowns(currentDropDowns + 1)
            : notify("Maximux product comparison limit exceded!")
        }
      >
        <img src={addSvg} alt="Add product icon" />
      </button>
      <button
        className="addProd"
        onClick={() =>
          currentDropDowns - 1 >= MIN_PRODUCTS
            ? setcurrentDropDowns(currentDropDowns - 1)
            : notify("At least one product must be present")
        }
      >
        <img src={removeSvg} alt="Remove product icon" />
      </button>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        ty
      />
    </div>
  );
};

export default AddDelete;
