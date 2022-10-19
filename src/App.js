import React, { Fragment } from "react";
import Header from "./Components/Layouts/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart></Cart>
      <Header />
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
