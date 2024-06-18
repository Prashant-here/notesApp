import React from 'react'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar';
import Homebg from './components/Homebg';
import AboutUs from './components/AboutUs'
import { Routes,Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';
const notesData=[];
const App = () => {
  return (
    
    <Routes>
      <Route path="/aboutus" element={<AboutUs></AboutUs>} />
      <Route path="/" element={<Homebg></Homebg>} />
      <Route path="/createNotes" element={<HomePage></HomePage>} />
      <Route path="/contactus" element={<ContactUs></ContactUs>} />
    </Routes>
      
      

      
  )
}

export default App