import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from "./context/authContext";
import { MainPage, LoginPage, RegisterPage, NotFoundPage, MenuPage, InventoryPage, CostsPage, BillingPage, UserInfoPage, UserSettingsPage } from './pages/IndexPages'
import { SideBar, OffCanva, Navigation, ProtectedRoute } from './components/IndexComponents'

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <header> <Navigation /> </header>
          <div> <SideBar /> </div>
          <div> <OffCanva /> </div>
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

            <Route path="/user-info" element={
              <ProtectedRoute>
                <UserInfoPage /> 
              </ProtectedRoute>
            }/>
            <Route path="/user-settings" element={
              <ProtectedRoute>
                <UserSettingsPage /> 
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
