import { Routes, Route, useLocation } from "react-router-dom";
import { useMemo } from "react";
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
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EditProfilePage from "./pages/ProfilePage/pages/EditProfilePage/EditProfilePage";

function App() {
  const data = useMemo(() => {
    const cachedData = localStorage.getItem("user");

    if (cachedData) return JSON.parse(cachedData);
    return null;
  }, []);

  return (
    <div className="main">
      <Header data={data} />
      <Routes>
        <Route path="/" element={<Landpage />} />
        <Route path="/exclusive-products" element={<ExclusivePage />} />
        <Route path="/products/:type" element={<ProductsPage />} />
        <Route path="/product-page/:id" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile-page/:id" element={<ProfilePage data={data} />} />
        <Route
          path="/profile-page/:id/edit"
          element={<EditProfilePage data={data}/>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
