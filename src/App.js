import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import InfoHoteis from './components/InfoHoteis';
import Detalhes from './components/Detalhes';
import Avaliacao from './components/Avaliacao';


const App = () => {
  return (
    
    <Router>
      <Header />
      <Route path="/" exact component={InfoHoteis} />
      <Route path="/detalhes/:id" component={Detalhes} />
      <Route path="/avalia/:id" component={Avaliacao} />
    </Router>
    
  );
}

export default App;