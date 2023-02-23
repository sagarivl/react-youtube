import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenuClose } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchId, setSearchId] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleMenuClose());
  }, []);
  return (
    <>
      <div className="m-2 p-2">
        <iframe
          width="800"
          height="500"
          src={"https://www.youtube.com/embed/" + searchId.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default WatchPage;
