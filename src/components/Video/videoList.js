import React from 'react';
import VideoItem from './videoItem';

const videoList = ({ videos, onVideoClick }) => {
  const render = videos.map((video) => {
    return (
      <VideoItem key={video.etag} video={video} onVideoClick={onVideoClick} />
    );
  });
  return <div className='ui relaxed divided list pr-md-3'>{render}</div>;
};

export default videoList;
