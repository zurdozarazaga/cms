import React, { useState, useContext, useReducer } from 'react';
import '../assets/styles/containers/Login.scss';

import { Link, useNavigate  } from 'react-router-dom';

import { UserContext } from '../Context/UserContext';

import { useForm } from "react-hook-form";

import '../assets/styles/components/Ver.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { URL_LOGIN } from '../util/constants';

import post from '../services/post';






const Login = () => {
  //este contexto posee el state y dsipatch de loginReducer que se envio en el provider
  const [storeUser, dispatch] = useContext(UserContext);
  const { nick, pass  } = storeUser
  const { register, handleSubmit, formState: { errors, isSubmitting} } = useForm();
  const navigate = useNavigate ();

  const handlePost = (data) => {
    //manejador de POST
    post(URL_LOGIN, data)
  }
  // se le envia la data y el evento con el useForm
  const onSubmit = (data, e) => {
    e.target.reset();
    handlePost(data);
    //redirecciona a LayoutUser
    navigate('/LayoutUser');
    //el dispatch viene del provider del useContext y se lo envia al loginReducer
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: data
    })
  };


  const [shown, setShown] = useState(false);
 

  const switchShown = () => setShown(!shown);

  
  return (
    <section className='login'>
      <section className='login__container'>
        <div className='login_container--title'>
          <h2>Iniciar sesión</h2>
        </div>
        {/* en el onSumit se enviara el dsispatch a loginreducer */}
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

              <button
                className='button'
                type='submit'
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