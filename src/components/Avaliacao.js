import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import ReactStars from 'react-stars'

import { db } from "./conectafb";

const Avaliacao = () => {
  const { id } = useParams();

  const [hotel, setHotel] = useState({});
  const [aviso, setAviso] = useState("");

  const { register, handleSubmit, errors } = useForm();

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

  const gravaAvaliacao = (data, e) => {
    try {
      db.collection("hoteis").doc(id).collection("avalia").add(data);
      setAviso("Ok! Avaliação realizada com sucesso");
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

  /* const ratingChanged = (newRating) => {
    console.log(newRating)
  }*/

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-7 mt-4">
          <div className="card">
            <img
              src={hotel.foto}
              className="card-img-top img-fluid"
              alt="Foto-hotel"
            />
            <div className="card-body">
              <p className="card-text">{hotel.nome}</p>
            </div>
          </div>
        </div>

        
        <div className="col-sm-5 mt-4">
          <button className="btn btn-success btn-lg btn-block">
            Avalie a sua estadia!
          </button>
          <div className="card">
            <div className="card-body">
              
              <form onSubmit={handleSubmit(gravaAvaliacao)}>
                <div className="input-group mt-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="far fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nome Completo:"
                    name="nome"
                    ref={register({ required: true })}
                  />
                </div>

                <div className="input-group mt-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i class="fas fa-at"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E-mail para contato:"
                    name="email"
                    ref={register({ required: true })}
                  />
                </div>

                <div className="input-group mt-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i class="fas fa-star"></i>
                    </span>
                  </div>
                  <ReactStars
                  size={26}
                  color2={'#ffd700'} 
                  name="nota"
                  type="hidden"/>

                  {/* <input
                    type="text"
                    className="form-control"
                    placeholder="Nota de 1 a 5:"
                    name="nota"
                    ref={register({ required: true })}
                  /> */}
                </div>
               
                <div
                  className={
                    (errors.nome ||
                      errors.email ||
                      errors.nota) &&
                    "alert alert-danger mt-5"
                  }
                >
                  {(errors.nome || errors.email || errors.nota) && (
                    <span>Por favor, preencha todos os campos</span>
                  )}
                </div>

                <input
                  type="submit"
                  className="btn btn-primary float-right mt-5"
                  value="Submeter"
                />
                <Link to={"/"} className="btn btn-success float-left mt-5">
                  Retornar
                </Link>
              </form>
            </div>
          </div>

          <div className={aviso && "alert alert-primary"}>
            {aviso && <span>{aviso}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avaliacao;
