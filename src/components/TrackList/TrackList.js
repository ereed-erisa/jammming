import React from "react";
import Track from "../Track/Track";
import styles from "../TrackList/TrackList.module.css";

export default function TrackList() {
  return (
    <ul className={styles.myPlaylist}>
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
  );
}
