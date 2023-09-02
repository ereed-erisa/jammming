import { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const [term, setTerm] = useState("");
  return (
    <>
      <form className={styles.searchForm}>
        {/* <label>Search Spotify: </label> */}
        <input type="text" placeholder="Enter a song, album, or artist" value={term} onChange={(e) => setTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchBar;
