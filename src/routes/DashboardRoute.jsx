import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import LayoutUser from '../containers/LayoutUser';

import Register from '../containers/Register';
import OrdenDia from '../components/OrdenDia';
import OrdenGuarnicion from '../components/OrdenGuarnicion';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import NotFound from '../containers/NotFound';


const DashboardRoute = () => (
  <div className='app'>
      <Header />
    <Routes>
      <Route exact path='/LayoutUser' element={<LayoutUser/>} />
        <Route exact path='/OrdenDia' element={<OrdenDia/>} />
        <Route exact path='/OrdenGuarnicion' element={<OrdenGuarnicion/>} />
        <Route exact path='/register' element={<Register/>} />
    </Routes>
      <Navigation />
  </div>
);

export default DashboardRoute;