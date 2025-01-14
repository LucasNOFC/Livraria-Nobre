import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Landpage from "./pages/Landpage";
import ExclusivePage from "./pages/ExclusivePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import "./styles/index.css";
import ProductPage from "./pages/ProductPage/ProductPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Landpage />} />
        <Route path="/exclusive-products" element={<ExclusivePage />} />
        <Route path="/products/:type" element={<ProductsPage />} />
        <Route path="/product-page/:id" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
