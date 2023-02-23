import React from "react";
import { Outlet } from "react-router-dom";
import Maincontainer from "./Maincontainer";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
