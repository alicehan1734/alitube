import React from 'react';
import styles from './video_detail.module.css'

const VideoDetail = ({video, video:{snippet}}) => {
  return (
    <section className={styles.detail}>
     <iframe className={styles.video} title="youtube video player" type="text/html" width="100%" height="600px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0" allowFullScreen></iframe>

      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3> 
      <hr/>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;