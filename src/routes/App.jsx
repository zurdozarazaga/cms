import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import '../assets/styles/containers/App.scss'

import HomeRoute from './HomeRoute';
import DashboardRoute from './DashboardRoute';


import Home from '../containers/Home';
import Login from '../containers/Login';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import LayoutUser from '../containers/LayoutUser';

import Register from '../containers/Register';
import OrdenDia from '../components/OrdenDia';
import OrdenGuarnicion from '../components/OrdenGuarnicion';
import Modal from '../containers/Modal';
import Error404 from '../components/Error404';

const App = () => (
  <BrowserRouter>
      <Routes>
        {/* <Route exact path='/' element={<Home/>} /> */}
        <Route exact path='/' element={<Login/>} />
      </Routes>
    <div className='app'>
      <Header />
      <Routes>
        <Route  path='/LayoutUser' element={<LayoutUser/>} />
          <Route  path='/OrdenDia' element={<OrdenDia/>} />
          <Route  path='/OrdenGuarnicion' element={<OrdenGuarnicion/>} />
          <Route  path='/register' element={<Register/>} />
      </Routes>
      <Navigation />
    </div>
    <Routes>
      <Route path='*' element={<Error404 />} />
    </Routes>
    {/* <Modal>
      <p>Modal</p>  
    </Modal>
     */}
    
  </BrowserRouter>
);

export default App;