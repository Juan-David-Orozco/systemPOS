import { Link } from 'react-router-dom'
import { RegisterForm } from '../components/RegisterForm'
import { Navigation } from '../components/Navigation'
import { app } from '../services/firebase'

export function MainPage() {

  console.log(app)

  return (
    <>
      <div className='row mx-auto mb-5'>
        <div className="col-6">
          <Link to={"/register"}>Register</Link>
        </div>
        <div className="col-6">
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
      <RegisterForm />
    </>
  )
}
