import React, {Component} from 'react';
import {useState} from 'react';
import './Inscription.css';

class Inscription extends Component{
  render(){
    
    return(
        
      <div className="content row bg-danger">
          <div className="col-md-6">
                      <div className="title">
                          <h2></h2>
                      </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
                      <div className="content-form-group col-md-7">
                            <div className="title">
                                <h2>Créer votre compte</h2>
                            </div>
                            <div className="content-form">
                                <div className="direct-form row">
                                    <div className="icone col-md-1">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                          </svg>
                                    </div>
                                    <div className="focus col-md-11">
                                        <input id="yourname" name="email" type="texte" placeholder='Nom'/>
                                    </div>
                                </div>
                                <div className="direct-form row">
                                    <div className="icone col-md-1">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                          </svg>
                                    </div>
                                    <div className="focus col-md-11">
                                        <input id="yourname" name="email" type="email" placeholder='E-mail'/>
                                    </div>
                                </div>
                                <div className="direct-form row">
                                    <div className="icone col-md-1">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
                                          <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                                          <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                          </svg>
                                    </div>
                                    <div className="focus col-md-11">
                                        <input id="yourname" name="email" type="text" placeholder='Mot de passe'/>
                                    </div>
                                </div>
                                <div className="send">
                                     <button>Envoyer</button>
                                 </div>
                            </div>
                      </div>
          </div>
      </div>
        
    );
  }
}


export default Inscription;