import React from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';

import {FiArrowLeft} from 'react-icons/fi'; 
import {Link} from 'react-router-dom';




export default function Register(){
    return (
        <div className="register-conatiner ">
            <div className="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4"></div>
                        <div class="col-md-4">
                        <section>
                            <img src={logoImg} alt="Be the hero"/>
                            <h1>CADASTRO</h1>
                            <p>Realize Seu cadastro e entre na Plataforma</p>
                            <Link to="/Logon">
                            <FiArrowLeft size="16" color="red"/>
                            Inicio</Link> 
                            </section>
                            <form>
                                <input placeholder="Nome"></input> 
                                <input type="email" placeholder="E-mail"></input> 
                                <input placeholder="Whatsapp"></input> 

                                <div className="input-group">
                                    <input placeholder="Cidade"></input>
                                    <input placeholder="UF"></input>  
                                </div>

                            </form>
                        </div>
                        <div class="col-md-4"></div>
                    </div>
                </div>
              
            </div>
        </div>


         );
}