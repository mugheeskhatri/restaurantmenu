import React, {useState} from 'react'
import Menu from './Views/main_menu/main_menu'
import SubCategory from '../src/Views/sub_category/Index'
import FinishOrder from '../src/Views/finish_order'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import css
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Loader from './Components/loader/Index'
import Edit_cart from './Views/edit_cart/Index'
import Index from './Views/welcome/index'
function App() {
  const [loading, setLoading] = useState(false)
  return loading ? (
    <Loader />
  ) : (
    <div style={{backgroundColor: '#7D141E'}} className="App">
      <div className="app-nested">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="edit_cart" element={<Edit_cart />} />
            {/* <Route path="invoices" element={<Invoices />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
      <div className="null-box">mughees</div>
    </div>
  )
}

export default App
