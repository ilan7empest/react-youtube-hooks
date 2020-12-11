import React from 'react';

const videoIframe = ({ video }) => {
  const videoId = video.id.videoId;
  return (
    <div className='ui embed'>
      <iframe
        className='embed-responsive-item'
        title='youtube_player'
        width='640'
        height='360'
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder='0'
        allowFullScreen></iframe>
    </div>
  );
};

export default videoIframe;
