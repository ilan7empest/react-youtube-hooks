import React, { useState, useEffect, Fragment } from 'react';
import Search from '../components/search';
import VideoList from '../components/Video/videoList';
import VideoIframe from '../components/Video/videoIframe';
import VideoDetails from '../components/Video/videoDetails';

import useVideo from '../hooks/useVideo';

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [results, search] = useVideo('tool 7empest');

  useEffect(() => {
    setSelectedVideo(results[0]);
  }, [results]);
  //

  // const handleVideoSelect = (video) => setSelectedVideo(video);

  const renderList = results.length !== 0 && (
    <VideoList videos={results} onVideoClick={setSelectedVideo} />
  );

  const renderIframe = selectedVideo && (
    <Fragment>
      <VideoIframe video={selectedVideo} />
      <div className='mt-3'>
        <VideoDetails video={selectedVideo} />
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <Search onSubmit={search} />
      <div className='ui grid stackable'>
        <div className='eleven wide column'>{renderIframe}</div>
        <aside className='five wide column'>{renderList}</aside>
      </div>
    </Fragment>
  );
};

export default Videos;
