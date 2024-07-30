import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const ContactsRow = (props) => {
  const {contact, index, deleteContact} = props;

  const handleDelete = () => {
    Swal.fire({
      title: 'Atencion',
      html: `<p>Estas por eliminar el contacto de <b>${contact.nombre}</b></p>`,
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Si, eliminar',
      confirmButtonColor: 'red',
      cancelButtonText: 'No',
    }).then((res)=>{
      if(res.isConfirmed){
        //actualzamos lista de contactos, eliminando este
        deleteContact(contact.codigo)
        Swal.fire({
          title: "contacto eliminado exitosamente",
          icon: 'success',
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
        })
      }

    })
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <img src={contact.imagen} alt={contact.nombre} className='imagen-contacto'/>
      </td>
      <td>{contact.nombre}</td>
      <td>{contact.numero}</td>
      <td>{contact.email}</td>
      <td>
        <button className='btn btn-warning me-2' type='button'>Editar</button>
        <button className='btn btn-danger' type='button' onClick={handleDelete}>Eliminar</button>
      </td>
    </tr>
  )
}
export default ContactsRow

ContactsRow.propTypes = {
  contact: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  deleteContact: PropTypes.func.isRequired,
}