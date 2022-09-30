import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
          <a class="navbar-brand" href="#">
            <img class="logoPag" src="/imagenes/logo.png" alt="Logo"/>
          </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="justify-content: flex-end;">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="./index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./precios.html">Precios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./contacto.html">Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tienda</a>
              <span class="sr-only"></span>
            </li>
          </ul>
        </div>
        </nav>
    )
}

export default Navbar