import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

export function Navigation() {

  const { userLogin, logout } = useAuth()
  console.log(userLogin)

  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }

  if(!userLogin) {
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
  
            <Link className="navbar-brand" to={"/#"}>SistemaPOS</Link>
            <button 
              className="navbar-toggler" type="button" 
              data-bs-toggle="collapse" data-bs-target="#navbar1" aria-controls="navbar1" 
              aria-expanded="false" aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbar1">
              <ul className='navbar-nav mx-auto'>
                <li className="nav-item">
                  <Link to="/" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/menu" className="nav-link">Menu</Link>
                </li>
              </ul>
              <ul className='navbar-nav'>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
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
  
            <Link className="navbar-brand" to={"/#"}>SistemaPOS</Link>
            <button 
              className="navbar-toggler" type="button" 
              data-bs-toggle="collapse" data-bs-target="#navbar2" aria-controls="navbarSupportedContent" 
              aria-expanded="false" aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbar2">
              <ul className='navbar-nav mx-auto'>
                <li className="nav-item">
                  <Link to="/" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/menu" className="nav-link">Menu</Link>
                </li>
                <li className="nav-item">
                  <Link to="/costs" className="nav-link">Costos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/inventory" className="nav-link">Inventario</Link>
                </li>
                <li className="nav-item">
                  <Link to="/billing" className="nav-link">Facturacion</Link>
                </li>
              </ul>
              <ul className='navbar-nav'>
                <li className="nav-item dropdown">
                  <Link className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to={"/register"}>User Info</Link></li>
                    <li><Link className="dropdown-item" onClick={handleLogout} >Another action</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
  
          </div>
        </nav>
      </>
    )
  }

}
