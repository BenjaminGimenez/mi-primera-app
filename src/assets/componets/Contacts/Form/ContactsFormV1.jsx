const ContactsFormV1 = () => {
  return (
    <form className="bg-white p-3 rounded text-dark">
      <fieldset className="mb-2">
        {" "}
        <label htmlFor="input-nombre" className="form-label">
          {" "}
          Nombre{" "}
        </label>{" "}
        <input
          placeholder="Juan Perez"
          type="text"
          id="input-nombre"
          className="form-control"
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
          placeholder="381 123 4567"
          type="text"
          id="input-numero"
          className="form-control"
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
          placeholder="jperez@gmail.com"
          type="email"
          id="input-email"
          className="form-control"
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
          placeholder="https://google.com"
          type="imagen"
          id="input-imagen"
          className="form-control"
        />{" "}
        <div className="invalid-feedback">
          {" "}
          <span className="badge text-bg-danger">
            Ingrese un imagen valido
          </span>{" "}
        </div>{" "}
      </fieldset>
    </form>
  );
};
export default ContactsFormV1;
