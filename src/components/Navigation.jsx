import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Navigation.scss';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Navigation = () => {
  const token = cookies.get('role');
  const idCookie = cookies.get('id');
  const roleCookie = cookies.get('role');
  const [dropdownEdit, setDropdownEdit] = useState(false);
  // const [dropdownElement, setDropdownElement] = useState(false);

  const handleClickEdit = () => {
    setDropdownEdit(!dropdownEdit);
  };

  // const handleClickElement = () => {
  //   setDropdownElement(!dropdownElement);
  // };
if(token === 'jefatura'){
  return (
    <nav className='navigation'>
      <ul className='navigation__container'>
        <li className='navigation__item--usuario'>
          <Link to='/Usuario'>
            Usuario
          </Link>
        </li>
        <li className='navigation__item--Inicio'>
          <Link to='/Home'>
            Inicio
          </Link>
        </li>
        <li className='navigation__item--Editar' id='editar'>
          <a onClick={handleClickEdit} href='#editar'>Ordenes</a>
          <div className={dropdownEdit ? 'visible' : 'no-visible'}>
            <Link to='/OrdenDia'>
              Orden del Día
            </Link>
            <Link to='/OrdenGuarnicion'>
              Orden de Guarnición
            </Link>
            <Link to='/OrdenReservada'>
              Orden Reservada
            </Link>
          </div>
        </li>
        {/* <li className='navigation__item--Editar' id='editar'>
          <a onClick={handleClickElement} href='#editar'>Volantes</a>
          <div className={dropdownElement ? 'visible' : 'no-visible'}>
            <Link to='/Activos'>
              Activos
            </Link>
            <Link to='/Vencimientos'>
              Vencimientos
            </Link>
          </div>
        </li> */}
        <li className='navigation__item--Contactos'>
          <Link to='/Contactos'>
            Contactos
          </Link>
        </li>
        <li className='navigation__item--Configuración'>
          <Link to='/Configuracion'>
          Configuración
          </Link>
        </li>
      </ul>
    </nav>
  );
}else{
  return (
    <nav className='navigation'>
      <ul className='navigation__container'>
        <li className='navigation__item--Inicio'>
          <Link to='/Home'>
            Inicio
          </Link>
        </li>
        <li className='navigation__item--Editar' id='editar'>
          <a onClick={handleClickEdit} href='#editar'>Ordenes</a>
          <div className={dropdownEdit ? 'visible' : 'no-visible'}>
            <Link to='/OrdenDia'>
              Orden del Día
            </Link>
            <Link to='/OrdenGuarnicion'>
              Orden de Guarnición
            </Link>
            <Link to='/OrdenReservada'>
              Orden Reservada
            </Link>
          </div>
        </li>
        {/* <li className='navigation__item--Editar' id='editar'>
          <a onClick={handleClickElement} href='#editar'>Volantes</a>
          <div className={dropdownElement ? 'visible' : 'no-visible'}>
            <Link to='/Activos'>
              Activos
            </Link>
            <Link to='/Vencimientos'>
              Vencimientos
            </Link>
          </div>
        </li> */}
        <li className='navigation__item--Contactos'>
          <Link to='/Contactos'>
            Contactos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
};
export default Navigation;