import React from 'react';
import '../assets/styles/containers/Login.scss';

import { useForm } from "react-hook-form";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data, e) => {
    console.log(data)
    e.target.reset();
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <div className='login_container--title'>
          <h2>Iniciar sesión</h2>
        </div>
        <form className='login__container--form' onSubmit={handleSubmit(onSubmit)}>
          <input 
            className='input'
            type='text'
            placeholder='usuario'
            name='user'
            {...register( 'user', {
              required: {
                value: true,
                message: 'Usuario obligatorio'
              }
            })}
          />
          <span className="text-danger text-small d-block mb-2">
            {errors.user &&  errors.user.message}
          </span>
          <input
           className='input'
           type='password'
            placeholder='Contraseña'
            name='password'
            {...register( 'password', {
              required: {
                value: true,
                message: 'Contraseña obligatoria'
              }
            })} 

          />
          <span className="text-danger text-small d-block mb-2">
            {errors.password &&  errors.password.message}
          </span>
          <button className='button' type='submit'>
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

};

export default Login;