import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <Link className="navbar-brand" to="/">
        <img src="sino.png" alt="logo" width="70"></img>
        Pesquisa de Hotéis em Gramado
      </Link>

      <div className="App">
      <input
        type="text"
        placeholder="Search"
      />
      </div>
      
      <div className="submit">
        <div className="btn btn-primary float-right">
          <span className="input-group-text">
            <i class="fa fa-search"></i>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
