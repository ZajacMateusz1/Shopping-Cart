import { useState } from "react";
import CartContextProvider from "./store/cart-context.jsx";
import Header from "./components/Header/Header.jsx";
import Page from "./components/Page.jsx";
import styles from "./App.module.css";
import CardModal from "./components/CardModal/CardModal.jsx";
function App() {
  const [modalStatus, setModalStatus] = useState(false);
  function handleModalStatus() {
    setModalStatus((prev) => !prev);
  }
  return (
    <div className={styles.app}>
      <CartContextProvider>
        {modalStatus && <CardModal handleModalStatus={handleModalStatus} />}
        <Header handleModalStatus={handleModalStatus}>Shopping cart App</Header>
        <Page />
      </CartContextProvider>
    </div>
  );
}

export default App;
