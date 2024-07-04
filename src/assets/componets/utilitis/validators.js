//_________________________
//PARA VALIRAR TODOS LOS CAMPOS DEL FORM
//_________________________
//retorna in boleano cuando el campo es true
export const validateName = (field) => {
    //validar campos vacios, null, etc
    if (!field || !field.value.trim()) {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
      return false;
    }
    //validar logitud
    if (field.value.trim().lenght < 3 || field.value.trim().lenght > 40) {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
      return false;
    }
    //validar que sean letras
    const regex = /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/;
    if (!regex.test(field.value)) {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
      return false;
    }
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
    return true;
  };
  
  //===== validar numero ======
  
  export const validateNumber = (field) => {
      //validar campos vacios, null, etc
      if (!field || !field.value.trim()) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
      }
      
      //validar que sean numeros y longitud hasta 10 digitos
      const regex = /^\d{10}$/;
      if (!regex.test(field.value)) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
      }
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
      return true;
    };
  
    //para validar Email
    export const validateEmail = (field) => {
      //validar campos vacios, null, etc
      if (!field || !field.value.trim()) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
      }
      //validar logitud
      if (field.value.trim().lenght < 3 || field.value.trim().lenght > 100) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
      }
      //validar formato mail
      const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!regex.test(field.value)) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
      }
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
      return true;
    };
  
    //para validar Url
    export const validateUrl = (field) => {
      
      //validar campos vacios, null, etc
      if (!field || !field.value.trim()) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
      }
      //validar logitud
      if (field.value.trim().lenght < 3) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
      }
  
      //validar formato url
      const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d{1,5})?(\/[^\s]*)?$/;
      if (!regex.test(field.value)) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        return false;
      }
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
      return true;
    };