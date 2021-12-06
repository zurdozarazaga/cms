import React, { useState } from 'react';
import '../assets/styles/containers/Login.scss';

import {  useNavigate  } from 'react-router-dom';



import { useForm } from "react-hook-form";

import '../assets/styles/components/Ver.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { URL_LOGIN } from '../util/constants';

import post from '../services/post';







const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting} } = useForm();
  const navigate = useNavigate ();
  
  const onSubmit  =  async(data, e) => {
    e.target.reset();
    //peticion Login 
    await post(URL_LOGIN, data)
    //redirecciona a LayoutUser
    navigate('/LayoutUser');
  };
  
  
  const [shown, setShown] = useState(false);
  const switchShown = () => setShown(!shown);
  
  

  return (
    <section className='login'>
      <section className='login__container'>
        <div className='login_container--title'>
          <h2>Iniciar sesión</h2>
        </div>
        {/* en el onSumit se enviara al post  */}
        <form className='login__container--form' onSubmit={handleSubmit(onSubmit)}>
          <div>
          <input 
            className='input-user'
            type='text'
            placeholder='usuario'
            name='nick'
            //validacion de usuario en el caso de que no ingrese nada
            {...register( 'nick', {
              required: {
                value: true,
                message: 'Usuario obligatorio'
              }
            })}
          />
            {/* si el usuario no ingresa nada se muestra el error */}
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
                //validacion de password en el caso de que no ingrese nada
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
            
          {/* si el password no ingresa nada se muestra el error */}
          <span className="text-danger text-small d-block mb-2">
            {errors.pass &&  errors.pass.message}
          </span>

              <button
                className='button'
                type='submit'
                //funcion de useForm
                disabled={isSubmitting }
                
                >
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
      </section>
    </section>
  );

};

export default Login;