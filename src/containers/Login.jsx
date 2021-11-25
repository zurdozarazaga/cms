import React, { useState } from 'react';
import '../assets/styles/containers/Login.scss';

import { Link } from 'react-router-dom';



import { useForm } from "react-hook-form";



import '../assets/styles/components/Ver.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  
  const { register, handleSubmit, formState: { errors, isSubmitting} } = useForm();
  

  
  const onSubmit = (data, e) => {
    e.target.reset();
  };


  const [shown, setShown] = useState(false);
 

  const switchShown = () => setShown(!shown);

  


  
  
  return (
    <section className='login'>
      <section className='login__container'>
        <div className='login_container--title'>
          <h2>Iniciar sesión</h2>
        </div>
        <form className='login__container--form' onSubmit={handleSubmit(onSubmit)}>
          <div>
          <input 
            className='input-user'
            type='text'
            placeholder='usuario'
            name='nick'
            {...register( 'nick', {
              required: {
                value: true,
                message: 'Usuario obligatorio'
              }
            })}
          />
            <span className="text-danger text-small d-block mb-2">
              {errors.nick &&  errors.nick.message}
            </span>
          </div>
          <div>
            <input
              className='input-password'
              type={shown ? 'text' : 'password'}
                placeholder='Contraseña'
                name='pass'
                {...register( 'pass', {
                  required: {
                    value: true,
                    message: 'Contraseña obligatoria'
                  }
                })}
                >
            </input>
            <span 
              onClick={switchShown}
              type='button'
            >
              <FontAwesomeIcon icon={shown ? faEye : faEyeSlash} /> 
            </span>
          </div>
            
          
          <span className="text-danger text-small d-block mb-2">
            {errors.pass &&  errors.pass.message}
          </span>
          <Link to = '/LayoutUser'>
            <button
              className='button'
              type='submit'
              disabled={isSubmitting }
            >
              Iniciar sesión 
            </button>
          </Link>
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

};

export default Login;