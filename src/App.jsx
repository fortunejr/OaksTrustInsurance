import React from 'react'
import Homepage from './Pages/Homepage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route} from "react-router-dom"
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
import Products from './Pages/Products/Products'
import Blog from './Pages/Blog/Blog'
import Claims from './Pages/Claims/Claims'
import Faq from './Pages/Faq/Faq'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/"  element = {<Homepage />}/>
        <Route path = "/about"  element = {<About />}/>
        <Route path = "/services"  element = {<Services />}/>
        <Route path = "/products"  element = {<Products />}/>
        <Route path = "/contact"  element = {<Contact />}/>
        <Route path = "/blog"  element = {<Blog />}/>
        <Route path = "/claims"  element = {<Claims />}/>
        <Route path = "/contact"  element = {<Contact />}/>
        <Route path = "/faq"  element = {<Faq />}/>
        <Route path = "*"  element={<p>Nothing to show</p>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App