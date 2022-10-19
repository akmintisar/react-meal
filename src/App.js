import React, { Fragment, useState } from "react";
import Header from "./Components/Layouts/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart hideCart={hideCartHandler}></Cart>}
      <Header showCart={showCartHandler} />
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
