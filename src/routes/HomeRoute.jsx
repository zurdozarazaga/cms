import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';

import Login from '../containers/Login';


const HomeRoute = () => {
  return (
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route  path='/login' element={<Login/>} />
        </Routes>

  )
};

export default HomeRoute;