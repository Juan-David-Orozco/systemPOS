import { useAuth } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'

export function OffCanva() {

  const { userLogin, logout } = useAuth()

  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  if(userLogin) {
    return (
      <>
        <div className="container-fluid">

          <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasUserNav" aria-labelledby="offcanvasUserNavLabel1">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasUserNavLabel1">{userLogin.email}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex flex-column justify-content-around">
              <div className='py-2' id='avatar-image' >
                {/* {userLogin.photoURL !== null ? 
                  <img src={userLogin.photoURL} alt="avatar" id='avatar' /> : 
                  <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1680737353/tatto/tatto_woman_rmzpgr.webp" alt="avatar" id='avatar' />
                } */}
                <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1680737353/tatto/tatto_woman_rmzpgr.webp" alt="avatar" id='avatar' />
              </div>
              <div className='bg-light p-2'>
                <nav className="nav nav-justified flex-column">
                  <Link className="nav-link active" aria-current="page" to={"/user-info"}>User Info</Link>
                  <Link className="nav-link" to={"/user-settings"}>Settings</Link>
                </nav>
              </div>
              <div>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>

        </div>
      </>
    )
  }
}
