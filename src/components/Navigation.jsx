import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


export function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">

          <Link className="navbar-brand" to={"/#"}>SistemaPOS</Link>
          <button 
            className="navbar-toggler" type="button" 
            data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='navbar-nav ml-auto'>
              <li className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
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
      {/* <div>
        <FontAwesomeIcon icon="fa-solid fa-bell" />
        <FontAwesomeIcon icon="fa-solid fa-camera" />
        <FontAwesomeIcon icon="fa-solid fa-flag" />
        <FontAwesomeIcon icon="fa-regular fa-user" />
        <p>
          Navigation
        </p> 
      </div> */}
    </>
  )
}
