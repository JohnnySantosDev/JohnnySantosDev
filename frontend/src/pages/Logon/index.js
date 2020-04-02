import React from 'react';
import {FiLogIn} from 'react-icons/fi'; 
import {Link} from 'react-router-dom';

import './style.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt="Be the hero"/>
            <form>
                <h1>Faça seu Logon</h1>
                <input placeholder="Sua Id"/>
                <button class="button" type="submit">Entrar  </button> 

                <Link to="/register">
                <FiLogIn size="16" color="red"/>
                Não tenho cadastro.</Link> 
            </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}