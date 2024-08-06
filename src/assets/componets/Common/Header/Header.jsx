import { Link, NavLink } from "react-router-dom"

const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" to='/'>Agenda</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className={({isActive})=>{
            return isActive ? 'nav-link active' : 'nav-link';
          }} to="/">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>{
            return isActive ? 'nav-link active' : 'nav-link';
          }} to="/contactos">Contactos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>{
            return isActive ? 'nav-link active' : 'nav-link';
          }} to="/usuarios">Usuarios</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header