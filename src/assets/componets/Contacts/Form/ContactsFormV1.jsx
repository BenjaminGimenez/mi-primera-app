import { useRef } from "react";
import PropTypes from 'prop-types';
import { validateEmail, validateName, validateNumber, validateUrl } from "../../utilitis/validators";
import { Contacto } from "../Contacto";

const ContactsFormV1 = (props) => {

  const {contactos, setContactos} =  props;

  const $inputNombre = useRef();
  const $inputNumero = useRef();
  const $inputImail = useRef();
  const $inputImagen = useRef();

  const handleSubmit = (e) =>{
    e.preventDefault();


    //1-validacion de campos
    if(!validateName($inputNombre.current) ||
       !validateNumber($inputNumero.current) ||
       !validateEmail($inputImail.current) ||
       !validateUrl($inputImagen.current)){
        return;
       }

      //2=obtencion de valores
       const nombre = $inputNombre.current.value;
       const numero = $inputNumero.current.value;
       const email = $inputImail.current.value;
       const imagen = $inputImagen.current.value;


       //3-crear contacto
       const nuevoContacto = new Contacto(nombre, numero, email, imagen)


       //4-guardar en  lista que luego actualiza en localstorage
       const nuevaLista = [...contactos, nuevoContacto];
       setContactos(nuevaLista);

       //5-mostar mensaje de exito
       alert('contacto guardado')

       //6-reiniciar formulario
       e.target.reset();

       //7-reseat clases
       $inputNombre.current.classList.remove('is-valid');
       $inputNumero.current.classList.remove('is-valid');
       $inputImail.current.classList.remove('is-valid');
       $inputImagen.current.classList.remove('is-valid');
  }

  return (
    <form className="bg-white p-3 rounded text-dark" onSubmit={handleSubmit}>
      <fieldset className="mb-2">
        {" "}
        <label htmlFor="input-nombre" className="form-label">
          {" "}
          Nombre{" "}
        </label>{" "}
        <input
          required
          placeholder="Juan Perez"
          type="text"
          id="input-nombre"
          className="form-control"
          ref={$inputNombre}
          maxLength={40}
          minLength={3}
        />{" "}
        <div className="invalid-feedback">
          {" "}
          <span className="badge text-bg-danger">
            Ingrese un nombre valido
          </span>{" "}
        </div>{" "}
      </fieldset>{" "}
      <fieldset className="mb-2">
        {" "}
        <label htmlFor="input-numero" className="form-label">
          {" "}
          Numero{" "}
        </label>{" "}
        <input
          required
          placeholder="381 123 4567"
          type="text"
          id="input-numero"
          className="form-control"
          ref={$inputNumero}
          maxLength={10}
          minLength={10}
        />{" "}
        <div className="invalid-feedback">
          {" "}
          <span className="badge text-bg-danger">
            Ingrese un número valido
          </span>{" "}
        </div>{" "}
      </fieldset>
      <fieldset className="mb-2">
        {" "}
        <label htmlFor="input-email" className="form-label">
          {" "}
          Email{" "}
        </label>{" "}
        <input
          required
          placeholder="jperez@gmail.com"
          type="email"
          id="input-email"
          className="form-control"
          ref={$inputImail}
          maxLength={50}
          minLength={3}
        />{" "}
        <div className="invalid-feedback">
          {" "}
          <span className="badge text-bg-danger">
            Ingrese un email valido
          </span>{" "}
        </div>{" "}
      </fieldset>{" "}
      <fieldset className="mb-2">
        {" "}
        <label htmlFor="input-imagen" className="form-label">
          {" "}
          Imagen{" "}
        </label>{" "}
        <input
          required
          placeholder="https://google.com"
          type="imagen"
          id="input-imagen"
          className="form-control"
          ref={$inputImagen}
          minLength={3}
        />{" "}
        <div className="invalid-feedback">
          {" "}
          <span className="badge text-bg-danger">
            Ingrese un imagen valido
          </span>{" "}
        </div>{" "}
      </fieldset>
      <div className="text-end mt-3">
        <button className="btn btn-danger" type="submit">Guardar</button>
      </div>
    </form>
  );
};
export default ContactsFormV1;

ContactsFormV1.propTypes = {
  contactos: PropTypes.array.isRequired,
  setContactos: PropTypes.func.isRequired,
}