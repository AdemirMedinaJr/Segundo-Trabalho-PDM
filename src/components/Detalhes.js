import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { useForm } from "react-hook-form";

import { db } from "./conectafb";

const Detalhes = () => {
  const { id } = useParams();

  const [hotel, setHotel] = useState({});
  //const [aviso, setAviso] = useState("");

  //const { register, handleSubmit, errors } = useForm();

  const getHotel = async (id) => {
    const doc = await db.collection("hoteis").doc(id).get();

    // retorna só o quadro
    if (doc.exists) {
      setHotel({ id: doc, ...doc.data() });
    } else {
      // doc.data() will be undefined in this case
      console.log("Erro...");
    }

    console.log(doc);
  };

  // indica o que será executado logo após a renderização deste componente
  // dependente do id que foi passado por parâmetro
  useEffect(() => {
    getHotel(id);
  }, [id]);

  /*
  const gravaLance = (data, e) => {
    try {
      db.collection("hoteis").doc(id).collection("avaliacoes").add(data);
      setAviso("Ok! Avaliação feita com sucesso");
    } catch (erro) {
      setAviso("Erro: " + erro);
    }
    tempoAviso();

    e.target.reset();
  };

  const tempoAviso = () => {
    setTimeout(() => {
      setAviso("");
    }, 5000);
  };
  */

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 mt-4">
          <div className="card">
            <img
              src={hotel.foto}
              className="card-img-top img-fluid"
              alt="Principal"
            />
            <div className="card-body">
              <p className="card-text">{hotel.descricao}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
