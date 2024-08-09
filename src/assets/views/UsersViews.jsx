
import { useQuery } from "@tanstack/react-query";
import { getUsersFn } from "../../api/users";
import UsersList from "../componets/Users/UsersList";
import LoadingUsers from "../componets/Users/LoadingUsers";
import ErrorUsers from "../componets/Users/ErrorUsers";



const UsersViews = () => {
  const {
    data: users,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsersFn,
  });

  return (
    <div>
      <h1>Esta es mi lista de usuarios</h1>
      {/* listado */}

      {/* renderizado condicional */}
      {isLoading && <LoadingUsers/>}
      {isError && <ErrorUsers/>}
      {isSuccess && <UsersList users={users}/>}
    </div>
  );
};
export default UsersViews;
