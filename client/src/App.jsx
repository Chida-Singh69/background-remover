import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Result from './Pages/Result'
import BuyCredit from './Pages/BuyCredit'
import Navbar from './Components/Navbar'

const App = () => {
  return (
  <div className='min-h-screen bg-gray-200 text-white'>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/result' element={<Result/>}/>
        <Route path ='/buy' element={<BuyCredit/>}/>
      </Routes>
    </div>
  )
}

export default App
