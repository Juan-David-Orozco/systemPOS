import { useContext, createContext, useEffect, useState } from 'react'
import { updateProfile, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../services/firebase'

const authContext = createContext()

export const useAuth = () => {
	const context = useContext(authContext)
	if (!context) throw new Error("There is not auth provider")
	return context
}

export function AuthProvider({ children }) {

	const [userLogin, setUserLogin] = useState(null)

	const [loading, setLoading] = useState(true)

	const register = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const login = async (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	const updateInfo = async (userName, URLphoto) => {
		return updateProfile(auth, {userName, URLphoto})
	}

	const logout = () => {
		setUserLogin(null)
		setLoading(true)
    return signOut(auth)
  }

	useEffect(() => {
		console.log('Auth provider loaded')
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			console.log(currentUser)
			if(currentUser) {
				setUserLogin(currentUser)
				setLoading(false)
			}
		})
		return () => unsubscribe()
	}, [])

	return (
		<authContext.Provider
			value={{ register, login, logout, updateInfo, userLogin, loading }}
		>
			{children}
		</authContext.Provider>
	)

}
