import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Landpage from "./pages/Landpage";
import ExclusivePage from "./pages/ExclusivePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import "./styles/index.css";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {

  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Landpage />} />
        <Route path="/exclusive-products" element={<ExclusivePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product-page/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
