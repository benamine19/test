import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />} >
          <Route index element={<Home/>} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
