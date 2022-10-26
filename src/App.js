import React, { Fragment, useState } from "react";
import Header from "./Components/Layouts/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart hideCart={hideCartHandler}></Cart>}
      <Header showCart={showCartHandler} />
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
