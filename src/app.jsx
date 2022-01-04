import React, { useEffect, useState } from 'react';
import SearchHeader from './components/search_header/search_header';
import Videolist from './components/video_list/video_list';
import styles from './app.module.css'

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
      .catch(error => console.log('error', error));  
  }, []);
      
  return <>
    <SearchHeader />
    <div className={styles.app}>
    <Videolist videos={videos}/>
    </div>
  </>;
  
};

export default App;
