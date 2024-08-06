import { useEffect, useState } from "react";
import UsersList from "../componets/Users/UsersList";
import LoadingUsers from "../componets/Users/LoadingUsers";

const UsersViews = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {

        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
    
            setUsers(data);
            
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(()=>{
        fetchUsers();
    }, [])
    

  return (
    <div>
        <h1>Esta es mi lista de usuarios</h1>
        {/* listado */}
        
        {/* renderizado condicional */}
        {users.length === 0 ? <LoadingUsers/> : <UsersList users={users}/>}
        
    </div>
  )
}
export default UsersViews