const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
console.log(BACKEND_URL);

export const getUsersFn = async () => {
  const res = await fetch(`${BACKEND_URL}/users`);
  const data = await res.json();

  if(!res.ok) throw new Error('Ocurrio un error');

  return data;
};

export const deleteUseFn = async (userId)=>{
    const res = await fetch(`${BACKEND_URL}/users/${userId}`, {
        method: 'DELETE',
    });

    return null;
}