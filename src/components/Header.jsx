import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'universal-cookie';

const Header = () => {
  const cookies = new Cookies();
  const navigate = useNavigate ();
  
  const nameUser = cookies.get('name');
  
  const cerrarSesion = () => {
    cookies.remove('id', { path: '/' });
    cookies.remove('role', { path: '/' });
    cookies.remove('name', { path: '/' });
    navigate('./login');
  }
  return (

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
          <span className='dropdown__user--name'>{nameUser}</span>
          <div className='dropdown__content'>
            <a href=''>Perfil</a>
            <a href=''>Registrarse</a>

            <Link to='/login' onClick={cerrarSesion}>
              Cerrar Sesion
            </Link>
            {/* <a href=''>Iniciar Sesion</a> */}
          </div>
        </div>
      </div>
    </div>
  </header>
  )
  };

export default Header;