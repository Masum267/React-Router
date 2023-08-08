import { useState } from 'react'
import './App.css'
import { DatePicker } from 'antd';
import Dashbord from './Components/main';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='about' element={<About />}/>
      {/* <Dashbord/> */}
            
    </Routes>
    </>
  )
}

export default App
