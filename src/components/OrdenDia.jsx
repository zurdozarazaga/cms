import { useState, useEffect } from 'react';

import { Outlet } from 'react-router';

import { Table } from 'reactstrap';
import DeleteBoton from './DeleteBoton';
import VerBoton from './VerBoton.';

import '../assets/styles//components/OrdenDia.scss';
import Add from './Add';
import Modal from '../modal/index';





const OrdenDia = () => {

  const [ordenes, setOrdenes] = useState([]);
  const [recuperado, setRecuperado] = useState(false);

  

  
  const mostrarDatos = () => {
    return (
      <>
        
        <div className='container m-0 p-0' >
          <div className=' container--title_table d-flex m-0 p-0 justify-content-between '>
          <div className='  flex-row title-table  d-flex justify-content-center '>
            <h6 className='m-0 text-white'>ORDENES DEL DÍA</h6>
          </div>
            <Add />
          </div>
          <table className="table table-dark table-striped table-hover">
          <caption>Listado de ordenes</caption>
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
              {ordenes.map(ord => {
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
    fetch('https://proyectogm.herokuapp.com/public/api/orders')
    .then((response) => {
      return response.json()
    })
    .then((ordenes) => {
      setOrdenes(ordenes);
      setRecuperado(true);
    })
    .catch(error => console.error(error));
  }, []);
  

  
  if (recuperado)
  // console.log(recuperado)
  return mostrarDatos()
  else
  return (<div>recuperando datos...</div>)

};


export default OrdenDia;