import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Register from '../containers/Register';
import UserAdminHome from '../containers/UserAdminHome';
import NotFound from '../containers/NotFound';

// import Header from '../components/Header';

const App = () => (
  <BrowserRouter>
      
        <Routes>
          <Route exact path='/' element={<Home/>} />
            <Route exact path='/login' element={<Login/>} />
              <Route exact path='/UserAdminHome' element={<UserAdminHome/>} />
            <Route exact path='/register' element={<Register/>} />
          <Route element={<NotFound/>} />
        </Routes>
  </BrowserRouter>
);

export default App;