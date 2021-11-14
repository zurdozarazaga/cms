import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';



const Layout = ({ children }) => (
  <div className='app'>
  <Header />
  { children}
  <Navigation />
</div>
);

export default Layout;
