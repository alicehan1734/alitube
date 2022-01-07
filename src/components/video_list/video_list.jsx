import React from 'react';
import Videoitems from '../video_item/video_items';
import styles from './video_list.module.css'

const Videolist = (props) => {

  console.log(props.videos)
  return(
    <div className= {styles.videos}>

    { props.videos.map(video => (<Videoitems key={video.id} video={video}/>) )}

  </div>
  )
};

export default Videolist;