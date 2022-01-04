import React from 'react';
import styles from './video_item.module.css'

const Videoitems = ({video: {snippet}}) => 
(
  <div className={styles.video}>

  
    <img  className={styles.thumbnails}src={snippet.thumbnails.medium.url} alt= "youtube thumbnail" />
    
    <div>
      <p className={styles.title}>{snippet.title}</p>
      <p className={styles.channel}>{snippet.channelTitle}</p>
    </div>
  
  </div>
)


;

export default Videoitems;