import jsPDF from "jspdf";
import { useContext } from "react";

import AppContext from "../App";
const Header = () => {
  const { width } = useContext(AppContext);

  const downloadPdfDocument = () => {
    const input = document.getElementById("comparisonReport");
    const pdf = new jsPDF({ unit: "px", format: "letter", userUnit: "px" });
    pdf.html(input, { html2canvas: { scale: 0.57 } }).then(() => {
      pdf.save("test.pdf");
    });
  };

  return (
    <div className="header" style={{ marginLeft: width }}>
      <div className="headingTextGrid">
        <h3>MarketPlace Comparison</h3>
      </div>
      <div className="btnGrid">
        <button className="btn" onClick={() => downloadPdfDocument()}>
          Download report
        </button>
      </div>
      <div className="moreGrid"></div>
    </div>
  );
};

export default Header;
