import React from 'react';
import Videoitems from '../video_item/video_items';
import styles from './video_list.module.css'

const Videolist = (props) => (
      
  <ul className= {styles.videos}>

    { props.data && props.videos.map(video => (<Videoitems key={video.snippet.channelId} video={video}/>) )}

  </ul>

  );

export default Videolist;