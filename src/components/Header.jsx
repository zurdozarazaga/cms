import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header className='header'>
    <div className='header__container'>
      <div className='header__hero'>
        <div className='header__logo'>
          <img src='' alt='logo' />
        <h4>GMA</h4>
        </div>
      </div>

      <div className='header__user'>
        <div className='user__img'>
          <span className='user__img--imgUser'>
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
        <div className='dropdown'>
          <span className='dropdown__user--name'>Administrador demo</span>
          <div className='dropdown__content'>
            <a href=''>Perfil</a>
            <a href=''>Registrarse</a>
            <Link to='login'>
              Cerrar Sesion
            </Link>
            {/* <a href=''>Iniciar Sesion</a> */}
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;