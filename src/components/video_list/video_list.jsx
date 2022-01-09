import React from 'react';
import Videoitems from '../video_item/video_items';
import styles from './video_list.module.css'

const Videolist = ({videos,onVideoClick,display}) => {

  return(
    <div className= {display !== "list"? styles.videos : styles.grid}>

    { videos.map(video => (<Videoitems key={video.id} display={display} video={video} onVideoClick={onVideoClick}/>) )}

  </div>
  )
};

export default Videolist;