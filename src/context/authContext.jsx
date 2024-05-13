import { useContext, createContext, useEffect, useState } from 'react'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../services/firebase'

const authContext = createContext()

export const useAuth = () => {
	const context = useContext(authContext)
	if (!context) throw new Error("There is not auth provider")
	return context
}

export function AuthProvider({ children }) {

	console.log(auth.currentUser)

	const user = auth.currentUser

	if (user !== null) {
		// The user object has basic properties such as display name, email, etc.
		const { displayName, email, photoURL, emailVerified } = user
		// The user's ID, unique to the Firebase project. Do NOT use
		// this value to authenticate with your backend server, if
		// you have one. Use User.getToken() instead.
		const uid = user.uid;
		console.log(uid, displayName, email, photoURL, emailVerified)

		user.providerData.forEach((profile) => {
			console.log("Sign-in provider: " + profile.providerId);
			console.log("  Provider-specific UID: " + profile.uid);
			console.log("  Name: " + profile.displayName);
			console.log("  Email: " + profile.email);
			console.log("  Photo URL: " + profile.photoURL);
		});
	}

	const [userLogin, setUserLogin] = useState(null)

	const [loading, setLoading] = useState(true)

	const register = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const login = async (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	useEffect(() => {
		console.log('Auth provider loaded')
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			console.log(currentUser.uid)
			if(currentUser) {
				setUserLogin(currentUser)
				setLoading(false)
			}
		})
		return () => unsubscribe()
	}, [])

	return (
		<authContext.Provider
			value={{ register, login, userLogin, loading }}
		>
			{children}
		</authContext.Provider>
	)

}
