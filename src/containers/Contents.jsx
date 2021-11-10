import React from 'react'


function Contents() {
  return (
    <>
      <div className ='container'>
        <div className='jumbotron'>
          <h2 className='text-center'>Grupo Mantenimiento</h2>
          <div id='login'>
            <a href='#'>Ingreso</a>
          </div>
        </div>
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Orden del Día</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Orden de Guarnición</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Orden Reservada</a>
              </li>
            </ul>
        </nav>
        <div className='row'>
          <div className='col-sm-2'>
            <div className='table-orden'>
              <table className='table table-bordered table-striped'>
                <thead>
                  <tr>
                    <th>Número</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href='#'/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='col-sm-' id='view_container'>
          <div id='vista' frameborder='0' width='100%' height='400px'>
          </div>
        </div>
        <div className='row' id='pages'>
          <ul className='pagination'>
          </ul>
        </div>	
    </div>
  </>
  )
};

export default Contents;