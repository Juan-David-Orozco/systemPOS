import { useAuth } from '../context/authContext'
import { Link } from 'react-router-dom'

export function SideBar() {

  const { userLogin } = useAuth()
  console.log(userLogin)

  if(userLogin)
    return (
      <>
        <nav className="navbar navbar-expand-* fixed-top">
          <div className="container-fluid">

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasSideBar" aria-labelledby="offcanvasSidebarLabel1">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasSidebarLabel1">Navigation</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
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
            </div>

          </div>
        </nav> 
      </>
    )
}
