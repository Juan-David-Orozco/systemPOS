import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

export function LoginForm() {

  const [user, setUser] = useState({ email: "", password: "" })
  const [error, setError] = useState()

	const navigate = useNavigate()
  const { login } = useAuth()

  const handleChange = ({ target: { name, value } }) => {
		setUser({ ...user, [name]: value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError('')
		try {
			console.log(user.email, user.password)
			await login(user.email, user.password)
			// setError("Registro Exitoso")
			// setUser({ email: "", password: "" })
			navigate("/")
		} catch (error) {
			console.log(error)
			console.log(error.code)
			console.log(error.message)
			if (error.code === 'auth/invalid-email')
				setError("Correo invalido")
			else if (error.code === 'auth/weak-password')
				setError("Password menor de 6 caracteres")
			else setError(error.message)
		}
	}


  return (
    <>
      <h3 className="fw-bold mb-2 mt-1 pt-2 pb-3 text-uppercase">LOGIN</h3>
      <p className="text-white-50 mb-3">Please enter your email and password!</p>
      {error && <div className='text-danger'>{error}</div>}
      <form onSubmit={handleSubmit}>

        <div className="form-floating text-dark my-2 py-1">
          <input
            type="email" name="email" id="InputEmail" 
            className='form-control' placeholder='email'
            onChange={handleChange}
          />
          <label htmlFor="InputEmail">Email</label>
        </div>
        <div className="form-floating text-dark my-2 py-1">
          <input
            type="password" name="password" id="InputPassword" 
            placeholder="password" className='form-control'
            onChange={handleChange}
          />
          <label htmlFor="InputPassword">Password</label>
        </div>
        <div className="mt-4 py-3">
          <button id='btn-register' className="btn btn-outline-light btn-md px-5" type="submit">LOGIN</button>
        </div>				

      </form>
    </>
  )
}
