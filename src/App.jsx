import CartContextProvider from "./store/cart-context.jsx";
import Header from "./components/Header/Header.jsx";
import Page from "./components/Page.jsx";
import styles from "./App.module.css";
import CardModal from "./components/CardModal/CardModal.jsx";
function App() {
  return (
    <div className={styles.app}>
      {/* <CardModal /> */}
      <Header>Shopping cart App</Header>
      <CartContextProvider>
        <Page />
      </CartContextProvider>
    </div>
  );
}

export default App;
