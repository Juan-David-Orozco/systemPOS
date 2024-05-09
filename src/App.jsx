import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from "./context/authContext";
import { MainPage, LoginPage, RegisterPage, NotFoundPage } from './pages/IndexPages'
import { Navigation } from './components/IndexComponents'

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <header className="navbar navbar-expand-md navbar-dark bg-light flex-column flex-md-row">
            <Navigation />
          </header>
          <Routes>
            <Route path="/" element={ <MainPage/> } />
            <Route path="/login" element={ <LoginPage/> } />
            <Route path="/register" element={ <RegisterPage/> } />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
