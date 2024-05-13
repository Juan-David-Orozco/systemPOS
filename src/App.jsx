import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from "./context/authContext";
import { MainPage, LoginPage, RegisterPage, NotFoundPage, MenuPage, InventoryPage, CostsPage, BillingPage } from './pages/IndexPages'
import { Navigation, ProtectedRoute } from './components/IndexComponents'

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <header> <Navigation /> </header>
          <Routes>

            <Route path="/" element={ <MainPage/> } />
            <Route path="/menu" element={ <MenuPage/> } />

            <Route path="/login" element={ <LoginPage/> } />
            <Route path="/register" element={ <RegisterPage/> } />
            <Route path="/*" element={<NotFoundPage />} />

            <Route path="/inventory" element={ 
              <ProtectedRoute>
                <InventoryPage/>
              </ProtectedRoute>
            }/>
            <Route path="/costs" element={ 
              <ProtectedRoute>
                <CostsPage /> 
              </ProtectedRoute>
            }/>
            <Route path="/billing" element={
              <ProtectedRoute>
                <BillingPage /> 
              </ProtectedRoute>
            }/>

          </Routes>
          <footer className='bg-light'>Todos los derechos reservados</footer>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
