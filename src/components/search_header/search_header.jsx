import React, { useRef } from 'react';
import styles from './search_header.module.css'

const SearchHeader = ({onSearch, reset}) => {

  const inputRef = useRef();

  const handleSearch =() => {
    const value = inputRef.current.value;
    onSearch(value);
  }

  const onClick = () =>{
    handleSearch();
  }

  const onKeyPress = (event) => {
    if(event.key === "Enter"){
      handleSearch();
    }

  }

  return (
    <header>
      <div className={styles.logo} onClick={()=>reset()}>
      {/* <img src="/images/logo.png" alt="logo"/> */}
      <div>📺</div>
      <h1>ALITUBE</h1>
      </div>
      <input  ref={inputRef} className={styles.input} type="search" placeholder='Search...' onKeyPress={onKeyPress}/>
      <button  className={styles.button} type="submit" onClick={onClick}>
        Search
      </button>
    </header>
  );
};

export default SearchHeader;