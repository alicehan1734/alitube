import React, { useEffect, useState } from 'react';
import SearchHeader from './components/search_header/search_header';
import Videolist from './components/video_list/video_list';
import styles from './app.module.css'

const App = ({youtube}) => {

  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube.search(query)
    .then(videos => setVideos(videos));
    
  }

  useEffect(() => {
    youtube.mostPopular()
    .then(videos => setVideos(videos));
   
  }, []);
      
  return <>
    <SearchHeader onSearch={search}/>
    <div className={styles.app}>
    <Videolist videos={videos}/>
    </div>
  </>;
  
};

export default App;
