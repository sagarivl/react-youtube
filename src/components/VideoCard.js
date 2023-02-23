import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelId, channelTitle, title, thumbnails } = snippet;
  return (
    <>
      <div className="p-2 m-2 w-56 shadow-lg cursor-pointer">
        <img src={thumbnails.high.url} alt="thumbnail" />
        <ul className="p-2">
          <li className="font-bold text-base mb-1">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
        </ul>
      </div>
    </>
  );
};

export default VideoCard;
