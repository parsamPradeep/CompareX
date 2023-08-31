import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import SideBar from "./components/SideBar";
import Home from "./components/Home";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to render: Header, Body and Footer Component
const AppLayout = () => {
  const [width, setWidth] = useState("25px");

  return (
    <React.Fragment>
      <SideBar setWidth={setWidth} />
      <Home width={width} />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
