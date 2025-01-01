import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Landpage from "./pages/Landpage";
import ExclusivePage from "./pages/ExclusivePage";
import ProductPage from "./pages/ProductPage";
import "./styles/index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landpage />} />
        <Route path="/exclusive-products" element={<ExclusivePage/>} />
        <Route path="/products" element={<ProductPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
