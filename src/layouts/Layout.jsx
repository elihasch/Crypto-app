import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="https://coingecko.com/">coins</a> | React.js{" "}
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developer by Elnaz Hashemi </p>
      </footer>
    </>
  );
}

export default Layout;
