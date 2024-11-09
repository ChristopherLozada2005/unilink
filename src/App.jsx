import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginFormPage from './pages/LoginFormPage.jsx';
import RegisterFormPage from "./pages/RegisterFormPage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginFormPage />} />
        <Route path="/register" element={<RegisterFormPage />} />
      </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
