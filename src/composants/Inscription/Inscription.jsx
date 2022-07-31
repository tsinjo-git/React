import React, {Component} from 'react';
import {useState} from 'react';
import './Inscription.css';
import { FaRegUser, FaRegEnvelope, FaKey } from 'react-icons/fa';

class Inscription extends React.Component{

   constructor (props) {
       super (props)
       this.state = {
           nom: '',
           email: '',
           mdp: '',
           mdp2: ''
       }
       this.handleChange = this.handleChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange (e) {
       const name = e.target.name
       this.setState({
           [name]: e.target.value
       })
   }
   handleSubmit (e) {
        e.preventDefault()
        this.setState({
            nom: '',
            email: '',
            mdp: '',
            mdp2: ''
        })
   }

  render(){
    
    return(
        
      <div className="content row">
          <div className="col-md-6">
                      <div className="title-page">
                          <h1>Save time by building <br/>fast <span className="green">with Boldo</span>  Template</h1>
                      </div>
          </div>
          <form className="col-md-6 d-flex justify-content-end align-items-center" onSubmit = {this.handleSubmit}>
                      <div className="content-form-group col-md-7">
                            <div className="title">
                                <h2>Créer votre compte</h2>
                            </div>
                            <div className="content-form">
                                <div className="direct-form row">
                                    <div className="icone col-md-1">
                                          <FaRegUser/>
                                    </div>
                                    <div className="focus col-md-11">
                                        <input id="nom" name="nom" type="texte"  placeholder='Nom' value={this.state.nom} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="direct-form row">
                                    <div className="icone col-md-1">
                                          <FaRegEnvelope/>
                                    </div>
                                    <div className="focus col-md-11">
                                        <input id="yourmail" name="email" type="email" placeholder='E-mail' value={this.state.email} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="direct-form row">
                                    <div className="icone col-md-1">
                                          <FaKey/>
                                    </div>
                                    <div className="focus col-md-11">
                                        <input id="yourname" name="mdp" type="password" placeholder='Mot de passe' value={this.state.mdp} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="direct-form row">
                                    <div className="icone col-md-1">
                                          <FaKey/>
                                    </div>
                                    <div className="focus col-md-11">
                                        <input id="yourname" name="mdp2" type="password" placeholder='Comfirmer mot de passe' value={this.state.mdp2} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="send">
                                     <button type='submit'>Envoyer</button>
                                 </div>
                            </div>
                      </div>
          </form>
      </div>
        
    );
  }
}


export default Inscription;