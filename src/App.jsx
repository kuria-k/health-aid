import { useState } from 'react'
import './App.css'
import Home from './Home'
import Login from './Login'
import {BrowserRouter ,Routes, Route, Router } from 'react-router-dom'
import Signup from './Signup'
import Medsinput from './Medsinput'
import Medication from './Medication'
import Contact from './Contact'
import Symptom from './Symptom'
import Student from './Student'
import HealthBlogs from './HealthBlogs'
import Dash from './Dash'


function App() {
  const [count, setCount] = useState(0)
   const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/medinputs" element={<Medsnput />} />
        <Route path="/medsearch" element={<Medication />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/symptom" element={<Symptom />} />
        <Route path="/student" element={<Student user={user} />} />
        <Route path='students' element={<Student/>}/>
        <Route path="/blogs" element={<HealthBlogs />} />
        <Route path="/dash" element={<Dash />} />
      </Routes>
    </BrowserRouter>
    
  
      
  )
}

export default App
