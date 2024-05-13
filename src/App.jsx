import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from "./context/authContext";
import { MainPage, LoginPage, RegisterPage, NotFoundPage, MenuPage, InventoryPage, CostsPage, BillingPage } from './pages/IndexPages'
import { Navigation } from './components/IndexComponents'

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          {/* <header className="navbar navbar-expand-md navbar-dark bg-light flex-column flex-md-row">
            <Navigation />
          </header> */}
          <header> <Navigation /> </header>
          <Routes>
            <Route path="/" element={ <MainPage/> } />
            <Route path="/menu" element={ <MenuPage/> } />
            <Route path="/inventory" element={ <InventoryPage /> } />
            <Route path="/costs" element={ <CostsPage /> } />
            <Route path="/billing" element={ <BillingPage /> } />
            <Route path="/login" element={ <LoginPage/> } />
            <Route path="/register" element={ <RegisterPage/> } />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
          <footer className='bg-light'>Todos los derechos reservados</footer>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
