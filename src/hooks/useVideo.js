import { useState, useEffect } from 'react';
import YouTube from '../utils/http_youtube';

const useVideo = (defaultTerm) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = async (term) => {
    const response = await YouTube.get('/search', {
      params: {
        q: term,
      },
    });
    setResults(response.data.items);
  };

  return [results, search];
};

export default useVideo;
