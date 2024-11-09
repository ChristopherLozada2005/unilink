import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginFormPage from './pages/LoginFormPage.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginFormPage />} />
      </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
