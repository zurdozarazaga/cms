import React from 'react';
import '../assets/styles/containers/Register.scss';

import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <header className='header'>
        <img className="header__img" src="" alt=""></img>
      </header>
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form">
            <input className="input" type="text" placeholder="Nombre"></input>
            <input className="input" type="text" placeholder="Correo"></input>
            <input className="input" type="password" placeholder="Contraseña"></input>
            <button className="button">Registrarme</button>
          </form>
          <Link to = '/login'>Iniciar sesión</Link>
        </section>
      </section>
    </>
  )
};

export default Register;