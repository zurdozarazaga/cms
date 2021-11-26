import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

// import { UserContext } from '../Context/UserContext';



import '../assets/styles/containers/App.scss'

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import LayoutUser from '../containers/LayoutUser';
import Home from '../containers/Home';

import Login from '../containers/Login';
import Register from '../containers/Register';
import OrdenDia from '../components/OrdenDia';
import OrdenGuarnicion from '../components/OrdenGuarnicion';
// import Modal from '../containers/Modal';
import Error404 from '../components/Error404';
import PrivateRoute from './PrivateRoute';

const App = () => {
  
  // const userLogueado = useContext(UserContext);
  // console.log(userLogueado.data.user);
  
  ;

  return (
    
      <BrowserRouter>
          <Routes>
            <Route  path='/LayoutUser' element={
              <PrivateRoute>
                <LayoutUser/>
              </PrivateRoute>
            } />
              <Route  path='OrdenDia' element={
                <PrivateRoute>
                  <div className='app'>
                    <Header />
                    <OrdenDia />
                    <Navigation />
                  </div>
                </PrivateRoute>
              } />
              <Route  path='OrdenGuarnicion' element={
                <PrivateRoute>
                  <div className='app'>
                    <Header />
                    <OrdenGuarnicion/>
                    <Navigation />
                  </div>
                </PrivateRoute>
              } />
            <Route  path='register' element={<Register/>} />
            <Route  path='/login' element={<Login/>} />
            <Route  path='/' element={<Home />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
      </BrowserRouter>
  )
};

export default App;