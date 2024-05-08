import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from "./context/authContext";
import { MainPage } from './pages/MainPage'

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={ <MainPage/> } />

          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
