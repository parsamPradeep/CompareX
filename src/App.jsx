import React from "react";
import ReactDOM from "react-dom/client";
import { useState, createContext } from "react";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Python from "./components/Python";
import Java from "./components/Java";
import Header from "./components/Header";
import R from "./components/R";
import ChatBot from "./components/chatBot/ChatBot";

const AppContext = createContext(null);
const AppLayout = () => {
  const [width, setWidth] = useState("25px");
  const value = { width, setWidth };
  return (
    <React.Fragment>
      <AppContext.Provider value={value}>
        <SideBar />
        <Header />
        <Outlet />
        <ChatBot />
      </AppContext.Provider>
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "python",
        element: <Python />,
      },
      {
        path: "java",
        element: <Java />,
      },
      {
        path: "r",
        element: <R />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
export default AppContext;
