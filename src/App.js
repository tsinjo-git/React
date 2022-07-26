import React from 'react';
import './App.css';
import Inscription  from './composants/Inscription/Inscription';
import Produit  from './composants/Produit/Produit';
import Connexion  from './composants/Connexion/Connexion';
import Header  from './composants/Header/Header';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="big-content container-fluid vh-100 d-flex justify-content-center align-items-center">
        <Produit/>
        {/* <Inscription/> */}
        {/* <Connexion/> */}
        <Header/>
    </div>
    
  );
}

export default App;
