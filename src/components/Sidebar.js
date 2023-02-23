import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menu = useSelector((state) => state.app.menuToggle);
  //early return
  if (!menu) return;
  return (
    <>
      <div className="p-5 shadow-lg w-48">
        <ul>
          <Link to="/">
            <li className="cursor-pointer">Home</li>
          </Link>
          <li>live</li>
          <li>Religious</li>
          <li>News</li>
        </ul>
        <h1 className="font-bold pt-2">Subscriptions</h1>
        <ul>
          <li>Movies</li>
          <li>Cricket</li>
          <li>Sports</li>
          <li>Football</li>
          <li>Songs</li>
        </ul>
        <h1 className="font-bold pt-2">Sports</h1>
        <ul className="">
          <li>Movies</li>
          <li>Cricket</li>
          <li>Sports</li>
          <li>Football</li>
          <li>Songs</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
