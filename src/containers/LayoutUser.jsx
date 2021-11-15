import React from 'react';



import Header from '../components/Header';

import Navigation from '../components/Navigation';

import '../assets/styles/components/Header.scss';
import '../assets/styles/components/Navigation.scss';


const LayoutUser = ({ children }) => (
  <div className='app'>
  { children}
</div>
);

export default LayoutUser;
