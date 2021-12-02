import React from 'react';
import { Route, useNavigate } from 'react-router';
import Cookies from 'universal-cookie';


import '../assets/styles/components/Header.scss';
import '../assets/styles/components/Navigation.scss';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import OrdenDia from '../components/OrdenDia';
import OrdenGuarnicion from '../components/OrdenGuarnicion';
import Register from './Register';


const LayoutUser = ({ children }) => { 

  return(
  <div className='app'>
  <Header />
    {children}
  <Navigation />
  
  </div>
  );

}


export default LayoutUser;
