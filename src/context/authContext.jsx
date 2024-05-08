import { useContext, createContext, useEffect, useState } from 'react'
import { onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../services/firebase'

const authContext = createContext()

export const useAuth = () => {
	const context = useContext(authContext)
	if (!context) throw new Error("There is not auth provider")
	return context
}

export function AuthProvider({ children }) {

	const [user, setUser] = useState(null)

	const [loading, setLoading] = useState(true)

	const register = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	useEffect(() => {
		//console.log('Auth provider loaded')
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			console.log(currentUser)
			setUser(currentUser)
			setLoading(false)
		})
		return () => unsubscribe()
	}, [])

	return (
		<authContext.Provider
			value={{ register, user, loading }}
		>
			{children}
		</authContext.Provider>
	)

}
