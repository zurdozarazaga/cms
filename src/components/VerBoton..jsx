import React from 'react';
import '../assets/styles/components/Ver.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';


const VerBoton = ({ord}) => {
  


  return (
    <botton className='tdActions--botton'>
    <a className='text-white' href={'https://proyectogm.herokuapp.com/' + ord} target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faEye} /> </a>

    </botton>
  );
};

export default VerBoton;
