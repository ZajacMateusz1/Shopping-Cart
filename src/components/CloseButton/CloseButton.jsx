import styles from "./CloseButton.module.css";
export default function CloseButton({ children, ...props }) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
