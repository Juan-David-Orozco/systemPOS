import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'

export function Navigation() {

  const { userLogin } = useAuth()
  console.log(userLogin)

  if (userLogin) console.log(userLogin.photoURL)

  if(!userLogin) {
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">

            <Link className="navbar-brand" to={"/#"}>SistemaPOS</Link>
            <button
              className="navbar-toggler" type="button" 
              data-bs-toggle="collapse" data-bs-target="#navbar1" 
              aria-controls="navbar1" aria-expanded="false" aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  " id="navbar1">
              <ul className='navbar-nav flex-row justify-content-around mx-sm-auto d-inline-flex'>
                <li className="nav-item mx-3 mx-sm-2 mx-md-0">
                  <Link to="/" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item mx-3 mx-sm-2 mx-md-0">
                  <Link to="/menu" className="nav-link">Menu</Link>
                </li>
                <li className="nav-item mx-3 mx-sm-2 mx-md-0">
                  <Link to="/products" className="nav-link">Products</Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/costs" className="nav-link">Costos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/inventory" className="nav-link">Inventario</Link>
                </li>
                <li className="nav-item">
                  <Link to="/billing" className="nav-link">Facturacion</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">Register</Link>
                </li> */}
              </ul>
              <ul className='navbar-nav flex-row justify-content-around d-inline-flex'>
                <li className="nav-item mx-3 mx-sm-2 mx-md-0">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item mx-3 mx-sm-2 mx-md-0">
                  <Link to="/register" className="nav-link">Register</Link>
                </li>
              </ul>
            </div>

          </div>
        </nav>
      </>
    )
  } else {
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container-fluid">

            <button
              className="navbar-toggler" type="button"
              data-bs-toggle="offcanvas" data-bs-target="#offcanvasSideBar"
              aria-controls="offcanvasSideBar" aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </button>
            <Link className="navbar-brand" to={"/#"}>SistemaPOS</Link>  
            <div className="collapse navbar-collapse" id="navbar2">
              <ul className='navbar-nav mx-auto'>
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    <FontAwesomeIcon icon="fa-solid fa-home" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/menu" className="nav-link">Menu</Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link">Productos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/costs" className="nav-link">Costos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/inventory" className="nav-link">Inventario</Link>
                </li>
                <li className="nav-item">
                  <Link to="/billing" className="nav-link">Facturación</Link>
                </li>
              </ul>              
            </div>
            <ul className='navbar-nav'>
              <li className="nav-item">
                <Link 
                  className='bg-dark px-2 py-1 my-auto' 
                  data-bs-toggle="offcanvas" to="#offcanvasUserNav" 
                  role="button" aria-controls="offcanvasUserNav" id="avatar-icon"
                >
                  <FontAwesomeIcon icon="fa-solid fa-user" />
                </Link>
              </li>
            </ul>
  
          </div>
        </nav>
      </>
    )
  }

}
