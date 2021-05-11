import React, { useEffect, useState } from 'react';
import Videolist from './components/video_list/video_list';

const App = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=23&key=AIzaSyDOeKPCL5FLrFjfbWAaMFUCckGD1mllAd0", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));  }
      , []);
      
  return <Videolist videos={videos}/>;
};

export default App;
