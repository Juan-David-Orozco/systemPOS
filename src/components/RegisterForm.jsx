import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'


export function RegisterForm() {

	const [user, setUser] = useState({ email: "", password: "" })
	const [error, setError] = useState()

	const navigate = useNavigate()
	const { register } = useAuth()

	const handleChange = ({ target: { name, value } }) => {
		setUser({ ...user, [name]: value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError('')
		try {
			console.log(user.email, user.password)
			await register(user.email, user.password)
			setError("Registro Exitoso")
			setUser({ email: "", password: "" })
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
		<div>

			<h2 className='mb-4' >Register</h2>
			{error && <div>{error}</div>}
			<form onSubmit={handleSubmit} className='form'>
				<div className='mb-2'>
					<label htmlFor="email">Email</label>
					<input
						type="email" name="email"
						id="email" placeholder="email@example.com"
						onChange={handleChange}
						className='form-control'
					/>
				</div>
				<div className='mb-2'>
					<label htmlFor="password">Password</label>
					<input
						type="password" name="password"
						id="password" placeholder="******"
						onChange={handleChange}
						className='form-control'
					/>
				</div>
				<button className='mt-3 bg-secondary btn btn-block'>Register</button>
			</form>

		</div>
	)
}
