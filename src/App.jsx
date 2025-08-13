import Header from "./components/Header/Header.jsx";
import Page from "./components/Page.jsx";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.app}>
      <Header>Shopping cart App</Header>
      <Page />
    </div>
  );
}

export default App;
