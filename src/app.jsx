import React, { useCallback, useEffect, useState } from 'react';
import SearchHeader from './components/search_header/search_header';
import Videolist from './components/video_list/video_list';
import styles from './app.module.css'
import VideoDetail from './components/video_detail/video_detail';
import Footer from './components/footer/footer';

const App = ({youtube}) => {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {    
    
    setSelectedVideo(video);
  }

  const search = useCallback(query => {

    youtube.search(query)
    .then(videos => {

      setVideos(videos);
      setSelectedVideo(null);
    });
    
  },[youtube])

  const reset = () => {
    setSelectedVideo(null);
    mostPopular();
  }

  const mostPopular = () => {
    youtube.mostPopular()
    .then(videos => {
      setVideos(videos)
    });
  }


  useEffect(() => {
    youtube.mostPopular()
    .then(videos => setVideos(videos));
   
  }, [youtube]);
      
  return <>
    <SearchHeader onSearch={search} reset={reset}/>
    <div className={styles.app}>
      <section className={styles.content}>

      {selectedVideo &&
        <div className={styles.detail}>
         <VideoDetail video={selectedVideo}/>
        </div>
        }
        <div className={styles.list}>
        <Videolist videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
        </div>
      </section>

    </div>

    <Footer />
  </>;
  
};

export default App;
