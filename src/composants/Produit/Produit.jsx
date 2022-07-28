import React, {Component} from 'react';
import {useState} from 'react';
import './produit.css';
import Colza from '../../images/Gel.jpg';
import Gels from '../../images/Gels.jpg';
import Rom from '../../images/romarin.jpg';

class Produit extends Component{
  render(){
    
    return(
        
      <div className="content">
            <div className="title-page">
                          <h1>An enterprise template to<br/> ramp up your  <span className="green">company website</span> </h1>
            </div>
            <div className="navigate">
                        <div className=" nav-btn prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                </svg>
                        </div>
                        <div className=" nav-btn next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                        </div>
                </div>
            <div className="contenu-prod row justify-content-around">
                <div className="col-md-3 prod">
                        <div className="img-prod">
                            <img src={Colza} />
                        </div>
                        <div className="title-prod">
                            <h2>Le virage vert</h2>
                        </div>
                        <div className="descri-prod">
                            <p>Le leader des huiles alimentaires, Lesieur (Groupe Avril) a annoncé ses nouveaux engagements. </p>
                        </div>
                </div>
                <div className="col-md-3 prod">
                        <div className="img-prod">
                            <img src={Rom} />
                        </div>
                        <div className="title-prod">
                            <h2>Nettoyant surfaces </h2>
                        </div>
                        <div className="descri-prod">
                            <p>Le nettoyant multi-surfaces L’Arbre Vert concentré s’utilise pour entretenir tous types de surfaces lavables : inox, émail, carrelage, aluminium, etc.</p>
                        </div>
                </div>
                <div className="col-md-3 prod">
                        <div className="img-prod">
                            <img src={Gels} />
                        </div>
                        <div className="title-prod">
                            <h2>Gel fosses septique</h2>
                        </div>
                        <div className="descri-prod">
                            <p>Le Gel Harpic Fosses Septiques Menthe Fraîche est spécialement conçu pour l'entretien des WC reliés à une fosse septique.</p>
                        </div>
                </div>
            </div>
      </div>
        
    );
  }
}


export default Produit;