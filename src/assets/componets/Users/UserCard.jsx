import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUseFn } from '../../../api/users';
import { toast } from 'sonner';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const UserCard = (props) => {
    const {user} = props;

    const queryClient = useQueryClient();

    const { mutate: deleteUser } = useMutation({
      mutationFn: deleteUseFn,
      onError: () => {
        toast.dismiss();
        toast.error('Ocurrio un error')
        
      },

      //recargamos los usuarios 
      onSuccess: () => {
        toast.dismiss();
        toast.success('Usuario eliminado');
        queryClient.invalidateQueries({
          queryKey: ['users'],
        })
      },

    });

    const handleDelete = async () => {
      const action = await Swal.fire({
        title: 'Atencion',
        icon: 'warning',
        html: `Estas seguro que desea eliminar al usuario <b>${user.name}</b>?`,
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
      })

      if(action.isConfirmed){
        toast.loading(`Eliminando a ${user.name}`);
        deleteUser(user.id)
      }
    }

  return (
    <article className='col-12 col-md-4'>
      <div className='card p-2 h-100 justify-content-between'>
        <div>
        <h2 className='fw-bold'>{user.name}</h2>
        <p>{user.email}</p>
        </div>
        <div className="tex-end">
          <button className='btn - btn-danger' onClick={handleDelete}>Eliminar</button>
        </div>
      </div>
    </article>
  )
}
export default UserCard

UserCard.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }),
  }