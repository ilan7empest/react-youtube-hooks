import React, { Component, Fragment } from 'react';
import YouTube from '../utils/http_youtube';
import Search from '../components/search';
import VideoList from '../components/Video/videoList';
import VideoIframe from '../components/Video/videoIframe';
import VideoDetails from '../components/Video/videoDetails';

class Videos extends Component {
  state = {
    searchTerm: '',
    results: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.handleOnSearchSubmit('tool 7empest');
  }

  handleOnSearchSubmit = async (searchTerm) => {
    this.setState({ searchTerm });
    const response = await YouTube.get('/search', {
      params: {
        q: searchTerm,
      },
    });
    this.setState({
      results: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  handleVideoSelect = (selectedVideo) => {
    this.setState({ selectedVideo });
  };

  render() {
    const renderList = this.state.results.length !== 0 && (
      <VideoList
        videos={this.state.results}
        onVideoClick={this.handleVideoSelect}
      />
    );
    const renderIframe = this.state.selectedVideo && (
      <Fragment>
        <VideoIframe video={this.state.selectedVideo} />
        <div className='mt-3'>
          <VideoDetails video={this.state.selectedVideo} />
        </div>
      </Fragment>
    );

    return (
      <Fragment>
        <Search onSubmit={this.handleOnSearchSubmit} />
        <div className='ui grid stackable'>
          <div className='eleven wide column'>{renderIframe}</div>
          <aside className='five wide column'>{renderList}</aside>
        </div>
      </Fragment>
    );
  }
}

export default Videos;
