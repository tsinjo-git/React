import React, {Component} from 'react';
import {useState} from 'react';
import './Header.css';
import { FaUserCircle } from 'react-icons/fa';
import User from '../../images/user.jpg';

class Header extends Component{

  

  render(){
    
    return(
     
     <div className="position-fixed header">
         <nav className="user">
                <FaUserCircle/>
                {/* <img src={User} /> */}
                <ul className="sub">
                        <li>Connexion</li>
                        <li>Deconnexion</li>
                </ul>
         </nav>
     </div>
        
    );
  }
}


export default Header;