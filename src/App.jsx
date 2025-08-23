import { useState, useCallback } from "react";
import CartContextProvider from "./store/CartProvider.jsx";
import Header from "./components/Header/Header.jsx";
import Page from "./components/Page.jsx";
import styles from "./App.module.css";
import CardModal from "./components/CartModal/CartModal.jsx";
function App() {
  const [modalStatus, setModalStatus] = useState(false);
  const handleModalStatus = useCallback(
    function handleModalStatus() {
      setModalStatus((prev) => !prev);
    },
    [setModalStatus]
  );
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
