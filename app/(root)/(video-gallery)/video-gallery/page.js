import React from "react";
import VideoGallery from "../../../../Components/VideoGallery";
import { getData } from "../../../../lib/actions/universel.actions";

const Video = async () => {
  const videoData = await getData(
    `${process.env.NEXT_PUBLIC_API}/v3/video/categories`
  );
  return (
    <>
      <VideoGallery data={videoData}/>
    </>
  );
};

export default Video;
