import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import AccessoriesDetails from "./components/AccesoriesDetails";
import Accessories from "./components/Accessories";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Plant from "./components/Plant";
import PlantDetails from "./components/PlantDetails";
import Seeds from "./components/Seeds";
import SeedsDetails from "./components/SeedsDetails";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plants" element={<Plant />} />
        <Route path="/plants/:id" element={<PlantDetails />} />
        <Route path="/pots_&_accessories" element={<Accessories />} />
        <Route path="/Accessories/:id" element={<AccessoriesDetails />} />
        <Route path="/seeds" element={<Seeds />} />
        <Route path="/seeds/:id" element={<SeedsDetails />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/blog" element={<Blog products={realProducts} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
