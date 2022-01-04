import React from 'react';
import styles from './search_header.module.css'

const SearchHeader = () => {
  return (
    <header>
      <div className={styles.logo}>
      <img src="/images/logo.png" alt="logo"/>
      <h1>ALITUBE</h1>
      </div>
      <input  className={styles.input} type="search" placeholder='Search...'/>
      <button  className={styles.button} type="submit">
        Search
      </button>
    </header>
  );
};

export default SearchHeader;