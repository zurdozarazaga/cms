import { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import DeleteBoton from './DeleteBoton';
import VerBoton from './VerBoton.';





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

          <Table striped>
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
                    <td>{ <VerBoton ord= {ord.file_url} /> }</td>
                    <td>{ <DeleteBoton ord= {ord.file_url} /> }</td>
                    
                  </tr>
                );
              })}
            </tbody>
          </Table>
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