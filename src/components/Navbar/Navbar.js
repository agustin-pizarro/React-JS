import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
          <Link class="navbar-brand" to = '/'>
            <img class="logoPag" src="/imagenes/logo.png" alt="Logo"/>
          </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="justify-content: flex-end;">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to = '/'>Inicio</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to = '/suplementos'>Suplementos</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to = '/equipamiento'>Equipamiento</Link>
            </li>
          </ul>
        </div>
        </nav>
    )
}

export default Navbar