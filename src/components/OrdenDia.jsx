import { useState, useEffect, useContext, useReducer } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { Outlet } from 'react-router';

import DeleteBoton from './DeleteBoton';
import VerBoton from './VerBoton.';

import '../assets/styles//components/OrdenDia.scss';
// import  useContext  from 'react';
import Add from './Add';
import Modal from '../modal/index';

import {URL_GET_OD} from '../util/constants';
import { OrdenDiaContext } from '../Context/ordenDiaContext';
import {ordenDiaReducer, initialStateOrdenes} from '../reducers/ordenDiaReducer';
import { Plane } from 'react-loader-spinner';








const OrdenDia = () => {
  const [ordenes, dispatchOrdenes] = useContext(OrdenDiaContext);
  const [recuperado, setRecuperado] = useState(false);
  console.log('ordenes',ordenes);

  

  
  const mostrarDatos = () => {
    return (
      <>
        
        <div className='container  m-0 p-0' >
          <div className=' container--title_table d-flex m-0 p-0 justify-content-between '>
          <div className='  flex-row title-table  d-flex justify-content-center '>
            <h6 className='m-0 text-white'>ORDENES DEL DÍA</h6>
          </div>
            <Add />
          </div>
          <table className="  table table-dark table-striped table-hover table-wrapper-scroll">
          
          <thead>
              <tr>
                <th scope="col">Tipo</th>
                <th scope="col" >Nº</th>
                <th scope="col" >Año</th>
                <th scope="col" >Fecha</th>
                <th scope="col" >Descripción</th>
                <th scope="col" >Archivo</th>
                <th scope="col" >Borrar</th>
              </tr>
            </thead>
            <tbody>
              {ordenes.ordenes.map(ord => {
                return (
                  <tr key={ord.id}>
                    <td>{ord.type}</td>
                    <td>{ord.number}</td>
                    <td>{ord.year}</td>
                    <td>{ord.date}</td>
                    <td>{ord.about}</td>
                    <td>{ <VerBoton  ord= {ord.file_url} /> }</td>
                    <td>{ <DeleteBoton idOrden={ord.id} ord= {ord.file_url} /> }</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Outlet />
        </div>
        <Modal />
      </>
    );
  };
  useEffect(() => {
    console.log('render effect Orden dia')
    fetch(URL_GET_OD)
    .then((response) => {
      return response.json()
    })
    .then((ordenes) => {
      //cambiar useState por useReducer. mandar el objeto a un context y posterir al modal para que actualice ordenes
      dispatchOrdenes({type: 'SET_ORDENES', payload: ordenes});  //cambiar useState por useReducer. mandar el objeto a un context y posterir al modal para que actualice ordenes;
      setRecuperado(true);
    })
    .catch(error => console.error(error));
  }, [dispatchOrdenes]);
  

  
  
  if (recuperado)
  return mostrarDatos()
  else
  return (
    <div className="d-flex justify-content-around align-items-center" >
      <Plane  color='grey' secondaryColor='black' arialLabel="loading-indicator" width={100} height={100} />
    </div>
  )

};


export default OrdenDia;