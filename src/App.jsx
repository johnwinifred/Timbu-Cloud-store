import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Landingpage/Homepage';
import ErrorPage from './pages/Landingpage/error-page';
import ProductListPage from './pages/ProductListPage';
import CheckoutEnd from './pages/CheckoutEnd';
import CheckoutPage from './pages/CheckoutPage';
import ProductDescription from './pages/ProductDescription';



function App({ productsInCart=[], setCartVisible}) {
  return (
   
        <BrowserRouter>
    
    <Routes>
    <Route exact path="/" element={<Homepage />} />
        <Route exact path="*" element={<ErrorPage />} />
        
        <Route path="/products" element={<ProductListPage />} />
        <Route exact path="/products/:id" element={<ProductDescription />} />
        <Route path="/cart" element={<CheckoutPage productsInCart={productsInCart} setCartVisible={setCartVisible}/>} />  
        <Route path="/checkoutend" element={<CheckoutEnd />} /> 
        <Route path="/checkout" element={<CheckoutPage />} /> 
    </Routes>
  </BrowserRouter>
  
  )
}


export default App
