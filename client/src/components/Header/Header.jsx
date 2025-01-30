import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import HeaderOptions from "../HeaderOptions/HeaderOptions";
import UserLogged from "../UserLogged/UserLogged";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const [headerOptions, setHeaderOptions] = useState(false);
  const [decodedToken, setDecodedToken] = useState(false);

  const handleHeader = (headerOptions) => {
    headerOptions ? setHeaderOptions(false) : setHeaderOptions(true);
  };

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      setDecodedToken(jwtDecode(token));
    }
  }, [token]);

  const location = useLocation();

  useEffect(() => {
    setHeaderOptions(false);
  }, [location]);

  return (
    <div className="inline-flex bg-black w-full">
      <div className="flex items-center w-full md:justify-between justify-center gap-3 p-3.5 text-white shadow shadow-black">
        <h1 className="text-white hover:text-gray-400">
          <Link to={"/"}>LIVRARIA NOBRE</Link>
        </h1>
        <div className>
          <ol className="md:flex hidden gap-10">
            <li className="pr-2 pl-2  hover:text-gray-400">
              <Link to={"/products/books"}>LIVROS</Link>
            </li>
            <li className="pr-2 pl-2  hover:text-gray-400">
              <Link to={"/products/mangas"}>MANGÁ</Link>
            </li>
            <li className="pr-2 pl-2  hover:text-gray-400">
              <Link to={"/exclusive-products"}>EXCLUSIVOS</Link>
            </li>
            <li className="pr-2 pl-2  hover:text-gray-400">
              <Link to={"/about"}>SOBRE NÓS</Link>
            </li>
          </ol>
        </div>
        {!token ? (
          <div>
            <img
              src="../../public/images/user.svg"
              className="size-8 menu-header"
              alt="handle user"
              onClick={() => handleHeader(headerOptions)}
            />
            <HeaderOptions activeMenu={headerOptions} />
          </div>
        ) : (
          <div>
            {console.log(decodedToken)}
            <UserLogged username={decodedToken.username} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
