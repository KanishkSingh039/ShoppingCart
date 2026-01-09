import './App.css'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/cart/cart'
import Productdetails from './pages/productdetails/productdetails'
import Productlist from './pages/productlist/productlist'
import './index.css'

function App() {
  return (
    <>
    <Routes>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/productdetails' element={<Productdetails/>}/>
      <Route path='/productlist' element={<Productlist/>}/>
    </Routes>
    </>
  )
}

export default App
