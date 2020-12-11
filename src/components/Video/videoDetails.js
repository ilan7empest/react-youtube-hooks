import React from 'react';

const videoDetails = ({ video }) => {
  return (
    <div className='ui segment'>
      <h5>{video.snippet.title}</h5>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default videoDetails;
