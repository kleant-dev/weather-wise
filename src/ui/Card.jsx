import styles from "./Card.module.css";

function Card({ title, children }) {
  return (
    <div className={styles.card}>
      <p>{title}</p>
      {children}
    </div>
  );
}

export default Card;
