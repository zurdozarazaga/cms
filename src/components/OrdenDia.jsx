import { useState, useEffect } from 'react';

import { Outlet } from 'react-router';

import { Table } from 'reactstrap';
import DeleteBoton from './DeleteBoton';
import VerBoton from './VerBoton.';

import '../assets/styles//components/OrdenDia.scss';






const OrdenDia = () => {

  const [ordenes, setOrdenes] = useState([]);
  const [recuperado, setRecuperado] = useState(false);

  

  
  const mostrarDatos = () => {
    return (
      <>
        {/* <div>
          <table border="1">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Nº</th>
                <th>Año</th>
                <th>Fecha</th>
                <th>Descripcion</th>
                <th>File</th>
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
                    <td><a href={'http://proyectogm.herokuapp.com/' + ord.file_url}>file</a></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}
        <div className='container m-0 p-0' >
          <div className=' title-table align-items-center'>
            <h6 className='title-table text-white d-flex justify-content-center'>ORDENES DEL DÍA</h6>
          </div>
          <table className="table table-dark table-striped table-hover">
          <caption>Listado de ordenes</caption>
          <thead>
              <tr>
                <th className='' scope="col">Tipo</th>
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
        setRecuperado(true);
      })
  }, [])
 
  
  if (recuperado)
  return mostrarDatos()
else
  return (<div>recuperando datos...</div>)

  
  };


export default OrdenDia;