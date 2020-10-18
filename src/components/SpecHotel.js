import React from "react";
import {Link} from "react-router-dom";

const SpecHotel = props => {
  return (
    <div className="card" key={props.id}>
      <img className="card-img-top" src={props.foto} alt="Hotel" />
      <div className="card-body">
        <h4>{props.nome}</h4>
      <Link to={`/detalhes/${props.id}`} className="btn btn-primary
       btn-block">
        Descrição
      </Link>
      <Link to={`/avalia/${props.id}`} className="btn btn-success btn-block">
        Avaliar
      </Link>
      </div>
    </div>
  );
};

export default SpecHotel;