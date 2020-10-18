import React, { useState, useEffect } from "react";

import { db } from "./conectafb";

import SpecHotel from "./SpecHotel";

const InfoHoteis = () => {
  // cria um array vazio para conter a lista de hoteis
  const [hoteis, setHoteis] = useState([]);

  // function para listar os hoteis a cada modificação na collection
  const getHoteis = async () => {
    // obtém os dados A CADA MODIFICAÇÃO da collection (tabela) hoteis
    db.collection("hoteis")
      .orderBy("nome")
      .onSnapshot((dados) => {
        const docs = [];
        dados.forEach((hotel) => {
          docs.push({ ...hotel.data(), id: hotel.id });
        });
        setHoteis(docs);
      });
  };
     
  
  // define o que será executado logo após o componente ser renderizado
  useEffect(() => {
    getHoteis();
  }, []);

  return (
    <div className="container mt-4">
      <div className="card-columns">
        {hoteis.map((hotel) => (
          <SpecHotel
          id={hotel.id}
          nome={hotel.nome}
          descricao={hotel.descricao}
          foto={hotel.foto}
          />
          ))}
      </div>
    </div>
  );
};


export default InfoHoteis;