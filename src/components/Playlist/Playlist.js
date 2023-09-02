import React from "react";
// import { useState } from "react";
import styles from "../Playlist/Playlist.module.css";
// import Track from "../Track/Track";
import TrackList from "../TrackList/TrackList";

// const [playlist, setPlaylist] = useState([]);

function Playlist() {
  return (
    <div className={styles.playlist}>
      <div className={styles.header}>
        <h2>My Playlist</h2>
        <button>Save to Spotify</button>
      </div>
      <TrackList />
    </div>
  );
}

export default Playlist;
