import React from 'react';
import './App.css';
import Inscription  from './composants/Inscription/Inscription';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="big-content container-fluid vh-100 d-flex justify-content-center align-items-center">
        <Inscription/>
    </div>
    
  );
}

export default App;
