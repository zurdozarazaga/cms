import React from 'react';
import '../assets/styles/components/Ver.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


const Edit = () => {
  


  return (
    <botton className='tdActions--botton'>
      <FontAwesomeIcon icon={faEdit} />
    </botton>
  );
};

export default Edit;
