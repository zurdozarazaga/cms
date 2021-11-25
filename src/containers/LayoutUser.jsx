import React from 'react';
import { Route } from 'react-router';


import '../assets/styles/components/Header.scss';
import '../assets/styles/components/Navigation.scss';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import OrdenDia from '../components/OrdenDia';
import OrdenGuarnicion from '../components/OrdenGuarnicion';
import Register from './Register';


const LayoutUser = ({ children }) => { 
  console.log(children);
  return(
  
  <div className='app'>
  <Header />
    {/* <Route  path='LayoutUser/*' element={<LayoutUser/>} />
      <Route  path='OrdenDia' element={<OrdenDia/>} />
      <Route  path='OrdenGuarnicion' element={<OrdenGuarnicion/>} />
      <Route  path='register' element={<Register/>} /> */}

  <Navigation />
  
  </div>
  );

}


export default LayoutUser;
