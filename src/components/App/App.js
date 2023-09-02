import React from "react";
import styles from "./App.module.css";

import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  return (
    <body>
      <div className={styles.app}>
        <Header />
        <SearchBar />
        <div className={styles.flex}>
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </body>
  );
}

export default App;
