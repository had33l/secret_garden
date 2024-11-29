import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import Accessories from "./components/Accessories";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Plant from "./components/Plant";
import Seeds from "./components/Seeds";
import ProductDetails from "./components/ProductDetails";
import ListOfProducts from "./components/ListOfProducts";
import {
  artificialProducts,
  realPlants,
  pressedFlowerPots,
} from "./components/Data";

function App() {
  const [artificialProductData, setArtificialProductData] =
    useState(artificialProducts);
  const [realProductData, setRealProductData] = useState(realPlants);
  const [pressedFlowerPotsData, setPressedFlowerPotsData] =
    useState(pressedFlowerPots);
  const [sum, setSum] = useState(0);

  const handleIncrement = (id, products, setProducts) => {
    setProducts(
      products.map((elt) => {
        if (elt.id === id) {
          return { ...elt, qte: elt.qte + 1 };
        }
        return elt;
      })
    );
  };

  const handleSumIncrement = (price) => {
    setSum(sum + price);
  };

  const handleDecrement = (id, products, setProducts) => {
    setProducts(
      products.map((elt) => {
        if (elt.id == id && elt.qte > 0) {
          return { ...elt, qte: elt.qte - 1 };
        }
        return elt;
      })
    );
  };

  const handleSumDecrement = (aproduct) => {
    if (aproduct.qte > 0) {
      setSum(sum - aproduct.price);
    }
  };

  const artificialHandlers = {
    products: artificialProductData,
    handleIncrement: (id) =>
      handleIncrement(id, artificialProductData, setArtificialProductData),
    handleDecrement: (id) =>
      handleDecrement(id, artificialProductData, setArtificialProductData),
  };

  const realHandlers = {
    products: realProductData,
    handleIncrement: (id) =>
      handleIncrement(id, realProductData, setRealProductData),
    handleDecrement: (id) =>
      handleDecrement(id, realProductData, setRealProductData),
  };

  const pressedHandlers = {
    products: pressedFlowerPotsData,
    handleIncrement: (id) =>
      handleIncrement(id, pressedFlowerPotsData, setPressedFlowerPotsData),
    handleDecrement: (id) =>
      handleDecrement(id, pressedFlowerPotsData, setPressedFlowerPotsData),
  };

  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/artificial_plants"
          element={
            <ListOfProducts
              {...artificialHandlers}
              handleSumIncrement={handleSumIncrement}
              handleSumDecrement={handleSumDecrement}
              sum={sum}
            />
          }
        />
        <Route
          path="/real_plants"
          element={
            <ListOfProducts
              {...realHandlers}
              handleSumIncrement={handleSumIncrement}
              handleSumDecrement={handleSumDecrement}
              sum={sum}
            />
          }
        />
        <Route
          path="/pressedFlower_&_pots"
          element={
            <ListOfProducts
              {...pressedHandlers}
              handleSumIncrement={handleSumIncrement}
              handleSumDecrement={handleSumDecrement}
              sum={sum}
            />
          }
        />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/ProductDetails" element={<ProductDetails />} /> */}
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
