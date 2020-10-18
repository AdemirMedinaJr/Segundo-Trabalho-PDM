
import { Link } from "react-router-dom";
import { db } from "./conectafb";
import SpecHotel from "./SpecHotel";
import React, { useEffect } from "react";

/*const hoteis = [];

function Pesquisa() {
 const [searchTerm, setSearchTerm] = React.useState("");
 const [searchResults, setSearchResults] = React.useState([]);
 const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 React.useEffect(() => {
    const results = hoteis.filter(hotel =>
      hotel.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="Search mt-3">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
         {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Pesquisa;*/

