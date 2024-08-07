import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/RootView";
import ContactsViews from "../views/ContactsViews";
import UsersViews from "../views/UsersViews";

export const router = createBrowserRouter([
  {
    path: "/", //mostramos la ruta
    element: <RootView />, //lo que renderizar en la ruta
    children: [
      {
        //permite crear componentes dentro de otros
        path: "contactos",
        element: <ContactsViews />,
      },
      {
        path: "usuarios",
        element: <UsersViews />,
      },
    ],
  },
]);
