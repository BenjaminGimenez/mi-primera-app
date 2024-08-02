import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Contacto } from '../Contacto';

const ContactsFormV2 = (props) => {
    const {contactos, setContactos} =  props;

    const {
      register,
      reset,
       formState: {errors},
       handleSubmit: onSubmitRHF,
    }= useForm()

    const handelSubmit = (datos) => {
      //ya esta todo validado con preventDefault
      console.log(datos)
      console.log('esta todo bien')

      //todo el resto de la logica de contactos

      //1-crear contacto
      const nuevoContacto = new Contacto(datos.nombre, datos.numero, datos.email, datos.magen)


      //2-guardar en  lista que luego actualiza en localstorage
      const nuevaLista = [...contactos, nuevoContacto];
      setContactos(nuevaLista);

      // Guardar en localStorage
      localStorage.setItem('contactos', JSON.stringify(nuevaLista));

      //3-mostar mensaje de exito
      alert('contacto guardado')

      //4- reiniciar formulario
      reset();
    };

    return (
        <form noValidate className="bg-white p-3 rounded text-dark" onSubmit={onSubmitRHF(handelSubmit)}>
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
              className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
              
              maxLength={40}
              minLength={3}

              {...register('nombre', {required: true, maxLength: {
                value:40,
                message: 'el nombre no puede tener mas de 40 caracteres'
              }, minLength: 3, pattern: /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/,})}

            />{" "}
            <div className="invalid-feedback">
              {" "}
              <span className="badge text-bg-danger">
                {errors.nombre?.message}
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
              className={`form-control ${errors.numero ? 'is-invalid' : ''}`}
              maxLength={10}
              minLength={10}
              {...register('numero', {required: true, maxLength: 10, minLength: 10, pattern: /^\d{10}$/,})}
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
              type="url"
              id="input-email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              maxLength={50}
              minLength={3}
              {...register('email', {required: true, maxLength: 50, minLength: 3, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,})}
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
              type="url"
              id="input-imagen"
              className={`form-control ${errors.imagen ? 'is-invalid' : ''}`}
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
}

export default ContactsFormV2

ContactsFormV2.propTypes = {
    contactos: PropTypes.array.isRequired,
    setContactos: PropTypes.func.isRequired,
  }