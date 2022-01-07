import React from 'react';
import styles from './video_item.module.css'

const Videoitems = ({video, video: {snippet}, onVideoClick, display}) => {

  const displayType = display == "list" ? styles.list : styles.grid;

  console.log(display);

  return (
    <div>
        <div className={`${styles.video} ${display == "list" ? styles.list : styles.grid}`} onClick={()=>onVideoClick(video)}>
      
      <img className={styles.thumbnails}src={snippet.thumbnails.medium.url} alt= "youtube thumbnail" />
      
      <div>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>

    </div>
    </div>

  )
  
}

;

export default Videoitems;