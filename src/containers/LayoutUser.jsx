import React from 'react';


import '../assets/styles/components/Header.scss';
import '../assets/styles/components/Navigation.scss';
import Header from '../components/Header';
import Navigation from '../components/Navigation';


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
