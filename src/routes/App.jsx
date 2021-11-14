import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import LayoutUser from '../containers/LayoutUser';
import Login from '../containers/Login';
import Register from '../containers/Register';
import UserAdminHome from '../containers/UserAdminHome';
import OrdenDia from '../components/OrdenDia';
import OrdenGuarnicion from '../components/OrdenGuarnicion';
import NotFound from '../containers/NotFound';

// import Header from '../components/Header';

const App = () => (
  <BrowserRouter>
        <LayoutUser>
          <Routes>
              <Route exact path='/LayoutUser' element={<LayoutUser/>} />
                <Route exact path='/OrdenDia' element={<OrdenDia/>} />
                <Route exact path='/OrdenGuarnicion' element={<OrdenGuarnicion/>} />
                <Route exact path='/register' element={<Register/>} />
          </Routes>

          <Routes>
            <Route element={<NotFound/>} />
          </Routes>
        </LayoutUser>
        
        <Routes>
          <Route exact path='/' element={<Home/>} />
            <Route exact path='/login' element={<Login/>} />
        </Routes>

  </BrowserRouter>
);

export default App;