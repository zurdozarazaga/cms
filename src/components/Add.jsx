import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import ModalPortal  from '../modal/index';;



function Add() {
  const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
  

  
  const newLocal = <ModalPortal
    toggle={toggle}
    modal={modal}

  >
    <p>modal</p>
   </ModalPortal>;
  return (
    <>
    <div className='d-flex me-3 align-items-center text-white'>
      <label className='text-white'>Cargar:</label>
      <h3>
      <botton 
          
        className='btn-lg pt-3 '
        onClick={toggle}
        >
        <FontAwesomeIcon icon={faPlusSquare} />
      </botton>
      </h3>
      
    </div>
    {modal && newLocal}
    </>
  )
};

export default Add
