import React from 'react';

const movieItem = ({ video, onVideoClick }) => {
  const handleOnClick = () => {
    onVideoClick(video);
  };
  return (
    <div
      className='item d-flex flex-wrap flex-xl-nowrap align-items-center'
      onClick={handleOnClick}>
      <img
        src={video.snippet.thumbnails.high.url}
        className='ui image'
        alt={video.snippet.title}
      />
      <div className='content'>
        <h5 className='header mt-2'>{video.snippet.title}</h5>
      </div>
    </div>
  );
};

export default movieItem;
