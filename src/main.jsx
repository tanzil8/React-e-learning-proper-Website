import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthContextProvider from './context/AuthContext.jsx'
import DashboardContextProvider from './context/Dashboard.jsx'
import ProductProvider from './context/ProductContext.jsx'
import CartontextProvider from './context/AddToCart.jsx'
import UserContextProvider from './context/UserInfo.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
     <DashboardContextProvider>
      <ProductProvider>
<CartontextProvider>
  <UserContextProvider>
    <App />
    </UserContextProvider>
    </CartontextProvider>
    </ProductProvider>
    </DashboardContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
