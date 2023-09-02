import styles from "../Track/Track.module.css";

function Track(props) {
  return (
    <>
      <div className={styles.trackInfo}>
        <span className={styles.title}>Track Title</span>
        <span className={styles.artist}>Name of Artist</span>
      </div>
      <button className={styles.addBtn}>+</button>
    </>
  );
}

export default Track;
