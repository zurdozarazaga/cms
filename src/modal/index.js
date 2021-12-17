import { useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, Form, Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import {URL_CREATE} from '../util/constants';
import { useForm, Controller } from "react-hook-form";





const ModalPotal = ({toggle, modal})=> {
  const { control, handleSubmit, formState: { errors, isSubmitting} } = useForm({});
 
 
 
//  console.log("Date: "+startDate.getDate()+
//           "-"+(startDate.getMonth()+1)+
//           "-"+startDate.getFullYear());
 
  //manejador de eventos para cargar archivos   
  // const handleFileUpload = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.select.value);
    // const file = e.target.files[0];
    // const formData = new FormData();
    // formData.append('file', file);
  // }
  const onSubmit = (data , e) => {
    e.preventDefault();
    data.file = e.target.file.files;
  
    if(data.type === "Orden del Día"){
      data.type ='od'
    }
    if(data.type === "Orden de Guarnición"){
      data.type ='og'
    }
    if(data.type === "Orden Reservada"){
      data.type ='or'
    }
    console.log(data);
    fetch(URL_CREATE, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'multi-part/form-data',
        "type": "formData"
      }
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      toggle();
    })
    .catch(error => console.error('Error:', error))
  };
  

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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup  id='form'>
          <Label for="exampleSelect">Seleccione el tipo de orden</Label>
          <Controller
            type="select" 
            name="type" 
            control={control}
            placeholder="orden ...."
            render={({ field, fieldState }) => (
              <Input 
              type="select" 
                {...field}
                {...fieldState}
                >
                <option hidden selected>Selecciona una opción</option>
                <option>Orden del Día</option>
                <option>Orden de Guarnición</option>
                <option>Orden Reservada</option>
              </Input>
            )}
            rules={  {
              required:{
                value: true,
                message: 'Selecciona una opción'
              }
            }}
          />
          {/* si el usuario no ingresa nada se muestra el error */}
          <span className="text-danger text-small d-block mb-2">
            {errors.type &&  errors.type.message}
          </span>
          
          <Label className="mt-4" for="exampleSelect">introduzca el número de orden</Label>
          {/* al ser un componente controlado se necesita envolverlo en un <controller />*/}
          <Controller
            control={control}
              type='number'
              name='number' 
            render={({ field, fieldState }) => (
              <Input
                {...field}
                {...fieldState}
                type='number'
              > 
                Número de Orden
              </Input>
            )}
            rules={  {
              required:{
                value: true,
                message: 'El número de orden es requerido'
              }
            }}
          />
            <span className="text-danger text-small d-block mb-2">
              {errors.number &&  errors.number.message}
            </span>
            <Label className="mt-4" for="exampleSelect">introduzca el año</Label>
          {/* al ser un componente controlado se necesita envolverlo en un <controller />*/}
          <Controller
            control={control}
              type='number'
              name='year' 
            render={({ field, fieldState }) => (
              <Input
                {...field}
                {...fieldState}
                type='number'
              > 
                Número de Orden
              </Input>
            )}
            rules={  {
              required:{
                value: true,
                message: 'El año es requerido'
              }
            }}
          />
            <span className="text-danger text-small d-block mb-2">
              {errors.year &&  errors.year.message}
            </span>
            <Label className="mt-4"  for="dateOrder">Seleccione la fecha de entrega</Label>
          <Controller
            control={control}
            type="date"
            name="date" 
            render = {({field, fieldState})=> (
              <Input
                type="date"
                name="date" 
                placeholder="dd-mm-aaaa"
                {...field}
                {...fieldState}
              > 
              </Input>
            )}
            rules={  {
              required:{
                value: true,
                message: 'La fecha de entrega es requerida'
              }
            }}
          />
            <span className="text-danger text-small d-block mb-2">
              {errors.date &&  errors.date.message}
            </span>
            <Label className="mt-4" for="exampleSelect">introduzca una breve descripción</Label>
          {/* al ser un componente controlado se necesita envolverlo en un <controller />*/}
          <Controller
            control={control}
              type='text'
              name='about' 
            render={({ field, fieldState }) => (
              <Input
                {...field}
                {...fieldState}
                type='text'
              > 
                Número de Orden
              </Input>
            )}
            rules={  {
              required:{
                value: true,
                message: 'El número de orden es requerido'
              }
            }}
          />
            <span className="text-danger text-small d-block mb-2">
              {errors.about &&  errors.about.message}
            </span>
          
            <Label className="mt-4" for="cargar" >Seleccione la orden que desea cargar</Label>
            <Controller
              control={control}
              name='file'
              type='file'
            render={({ field, fieldState }) => (
              <Input 
                className=' btn-success form-control-file '
                type='file'
                name='file'
                {...field}
                {...fieldState}
              />
            )}
            rules={  {
              required:{
                value: true,
                message: 'Selecciona una orden'
            }
            }}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.file &&  errors.file.message}
            </span>
          </FormGroup>
          <ModalFooter>
            <Button
              type='submit'
              color="success"
              name='submit'
              >
              Cargar
            </Button>
            <Button color="secondary" onClick={toggle}>Cerrar</Button>
          </ModalFooter>
        </Form>
        </ModalBody>
      </Modal>
    </>
  )
};


export default ModalPotal;