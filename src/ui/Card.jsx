/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./Card.module.css";

function Card({ title, imageSrc, children }) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <div className={styles.children}>{children}</div>
    </div>
  );
}

export default Card;
