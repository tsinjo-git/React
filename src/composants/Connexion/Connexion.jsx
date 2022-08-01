import React, {Component} from 'react';
import {useState} from 'react';
import './Connexion.css';
import { FaRegUser, FaRegEnvelope, FaKey } from 'react-icons/fa';

class Connexion extends Component{

  

  render(){
    
    return(
     
      <div className="content row">
          <div className="col-md-6">
                      <div className="title-page">
                          <h1>Save time by building <br/>fast <span className="green">with Boldo</span>  Template</h1>
                      </div>
          </div>
          <form className="col-md-6 d-flex justify-content-end align-items-center" >
                      <div className="content-form-group col-md-7">
                            <div className="title">
                                <h2>Connecter a votre compte</h2>
                            </div>
                            <div className="content-form">
                                
                                <div className="direct-form row">
                                    <div className="icone col-md-1">
                                          <FaRegEnvelope/>
                                    </div>
                                    <div className="focus col-md-11">
                                        <input id="yourmail" name="email" type="email" placeholder='E-mail' />
                                    </div>
                                </div>
                                <div className="direct-form row">
                                    <div className="icone col-md-1">
                                          <FaKey/>
                                    </div>
                                    <div className="focus col-md-11">
                                        <input id="yourname" name="mdp" type="password" placeholder='Mot de passe' />
                                    </div>
                                </div>
                                
                                <div className="send">
                                     <button type='submit'>Se connecter</button>
                                 </div>
                            </div>
                      </div>
          </form>
      </div>
        
    );
  }
}


export default Connexion;