// import { useState } from "react";
import styles from "./SearchResults.module.css";

import Track from "../Track/Track";

function SearchResults(props) {
  //   const [results, setResults] = useState([]);
  return (
    <div className={styles.box}>
      <h2 className={styles.responseMessage}>Results for "something"</h2>
      <ul className={styles.searchResults}>
        <li>
          <Track />
        </li>
        <li>
          <Track />
        </li>
        <li>
          <Track />
        </li>
        <li>
          <Track />
        </li>
        <li>
          <Track />
        </li>
      </ul>
    </div>
  );
}

export default SearchResults;
