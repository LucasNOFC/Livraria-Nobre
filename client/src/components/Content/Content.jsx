import React from "react";

const Content = () => {
  return (
    <div>
      <h3 className="text-2xl text-lime-500 font-bold">
        Bem vindo a Livraria Nobre
      </h3>
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl font-bold text-lime-500">
          Temos promoções incríveis!
        </h1>
        <h4 className="font-bold text-2xl ">
          Vendemos pacotes de livros por um preço amigo!
        </h4>
      </div>
      <p className="text-gray-900">Desde livros literários a até didáticos!</p>
    </div>
  );
};

export default Content;
