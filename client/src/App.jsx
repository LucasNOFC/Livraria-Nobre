import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Landpage from "./pages/Landpage";
import ExclusivePage from "./pages/ExclusivePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import "./styles/index.css";
import ProductPage from "./pages/ProductPage/ProductPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";
import { jwtDecode } from "jwt-decode";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  const [decodedToken, setDecodedToken] = useState(false);

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      setDecodedToken(jwtDecode(token));
    }
  }, [token]);

  return (
    <div className="main">
      <Header
        token={token}
        username={decodedToken.username}
        userID={decodedToken.userID}
      />
      <Routes>
        <Route path="/" element={<Landpage />} />
        <Route path="/exclusive-products" element={<ExclusivePage />} />
        <Route path="/products/:type" element={<ProductsPage />} />
        <Route path="/product-page/:id" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/profile-page/:id"
          element={<ProfilePage username={decodedToken.username} token={token} userID={decodedToken}/>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
