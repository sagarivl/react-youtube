import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../utils/Constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    setVideos(json.items);
  };
  if (!videos) return;
  return (
    <>
      <div className="flex flex-wrap">
        {videos?.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} key={video.id} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default VideoContainer;
