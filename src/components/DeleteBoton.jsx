import {useContext} from 'react';
import '../assets/styles/components/DeleteBoton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import deleteElement from '../services/delete';
import {URL_DELETE} from '../util/constants'
import { OrdenDiaContext } from '../Context/ordenDiaContext';


const DeleteBoton = (props) => {
  const [ordenes, dispatchOrdenes ] = useContext(OrdenDiaContext);
  const { idOrden } = props;

  const onDeleteElement = async (id) => {
    console.log(id);
    if (window.confirm('¿Desea eliminar el elemento?')) {
      await deleteElement(URL_DELETE, id);
      await dispatchOrdenes({type: 'DELETE_ORDEN', payload: id});
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