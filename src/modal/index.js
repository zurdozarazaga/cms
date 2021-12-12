import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import {URL_CREATE} from '../util/constants';





const ModalPotal = ({toggle, modal})=> {
 //manejador de eventos para cargar archivos   
  const handleFileUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
  }
  return (
    <>
      <Modal className='position-relative' isOpen={modal} >
        <ModalHeader >
          <div className=" "  >
            <div className="position-absolute top-0 end-0"  >
              <button
              className="btn" 
              type="button" 
              aria-label="Close" 
              onClick={toggle}>
              <FontAwesomeIcon icon={faTimesCircle} /> 
              </button>
            </div>
            <div className="title">
              <h4>Cargar Orden</h4>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <FormGroup onSubmit={handleFileUpload} id='form'>
          <Label for="exampleSelect">Seleccione el tipo de orden</Label>
          <Input  type="select" name="select" id="exampleSelect">
            <option>Orden del Día</option>
            <option>Orden de Guarnición</option>
            <option>Orden Reservada</option>
          </Input>
          
          <Label for="exampleSelect">introduzca el número de orden</Label>
          <Input type='number'> Número de Orden</Input>
    
            <Label for="cargar" >Seleccione la orden que desea cargar</Label>
            <Input className=' btn-success form-control-file ' type='file' name='order' /> 
          </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button color="success">Cargar</Button>
            <Button color="secondary" onClick={toggle}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </>
  )
};


export default ModalPotal;