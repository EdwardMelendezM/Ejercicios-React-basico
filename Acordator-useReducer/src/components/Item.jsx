import styles from "./item.module.css";
const Item = ({ item }) => {
  return (
    <div className={styles.itemContainer} key={item.shortUrl}>
      <div className={styles.itemInfoContainer}>
        <span className={styles.itemInfoTag}>URL:</span>
        <span>{item.url}</span>
      </div>
      <div className={styles.itemInfoContainer}>
        <span className={styles.itemInfoTag}>ShortUrl:</span>
        <span>
          <a href={`http>//localhost:5173/u/${item.shortUrl}`} target="_blank">
            http://localhost:3000/u/{item.shortUrl}
          </a>
        </span>
      </div>
      <div className={styles.itemInfoContainer}>
        <span className={styles.itemInfoTag}>Views:</span>
        <span>{item.view} Views</span>
      </div>
    </div>
  );
};

export default Item;
