import React from 'react';
import '../assets/styles/containers/Login.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <div className='login_container--title'>
        <h2>Iniciar sesión</h2>
      </div>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button'>
          Iniciar sesión 
        </button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' id='cbox1' defaultValue='first_checkbox' />
            Recuérdame
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      
      {/* Section media login */}

      {/* <section className='login__container--social-media'>
        <div className='login__container--google'>
          <span className='login__container--logo'>
            { <FontAwesomeIcon icon={faGoogle} /> }
          </span>
          <span className='login__container--google-parrafo'>Iniciar sesion con Google</span>
        </div>
        <div className='login__container--facebook'>
          <span className='login__container--logo'>
            {<FontAwesomeIcon icon={faFacebook} /> }
          </span>
          <span className='login__container--facebook-parrafo'>Iniciar sesion con Facebook</span>
        </div>
        <div className='login__container--register'>
          <p>
            No tienes ninguna cuenta
          </p>
          <a href>
            Regístrate
          </a>
        </div>
      </section> */}
    </section>
  </section>

);

export default Login;