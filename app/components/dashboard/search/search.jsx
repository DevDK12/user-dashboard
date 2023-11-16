"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";

const Search = ({ placeholder }) => {

  const handleSearch = (e) => {


  };

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
