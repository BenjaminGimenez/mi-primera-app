import { useEffect, useState } from "react";
import ContactsFormV1 from "../componets/Contacts/Form/ContactsFormV1"
import ContactsTable from "../componets/Contacts/Table/ContactsTable";

// Verificación adicional para asegurarse de que la cadena es un JSON válido
const contactoLS = localStorage.getItem('contactos');
const initialContacts = contactoLS ? JSON.parse(contactoLS) : [];

const ContactsViews = () => {
  const [contactos, setContactos] = useState(initialContacts);

  useEffect(() => {
    localStorage.setItem('contactos', JSON.stringify(contactos));
  }, [contactos]);
  
  return (
    <>
    <h1>Cargar contactos</h1>
    <hr />
    {/* formulario */}
    <ContactsFormV1 contactos={contactos} setContactos={setContactos}/>
    <ContactsTable contactos={contactos} setContactos={setContactos}/>
    {/* tabla */}
    
    </>
  )
}
export default ContactsViews;