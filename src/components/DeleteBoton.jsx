import React from 'react';
import '../assets/styles/components/DeleteBoton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import deleteElement from '../services/delete';
import {URL_DELETE} from '../util/constants'


const DeleteBoton = (props) => {
  const { idOrden } = props;

  const onDeleteElement = async (id) => {
    if (window.confirm('¿Desea eliminar el elemento?')) {
      await deleteElement(URL_DELETE, id);
    }
  };

  
  return (
    
      <botton 
        className='tdActions--botton'
        onClick={() => onDeleteElement(idOrden)}
        >
        <FontAwesomeIcon icon={faTrash} />
      </botton>
  
  );
};

export default DeleteBoton;