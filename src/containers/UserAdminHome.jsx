import React from 'react';
import Header from '../components/Header';
import '../assets/styles/components/Header.scss';
import Navigation from '../components/Navigation';
import '../assets/styles/components/Navigation.scss';
import '../assets/styles/containers/App.scss';

const UserAdminHome = () => (
  <div className='app'>
    <Header />
    <Navigation />
  </div>
);

export default UserAdminHome;