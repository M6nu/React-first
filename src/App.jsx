import { useState } from 'react'
import './App.scss'
import Navbar from './components/NavBar/Navbar'
import Home from './components/HomePage/Home'
import Product from './components/Product/Product'
import Value from './components/Value/Value'
import Contact from './components/Contacts/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='app'>
      <section className='home-section'>
        <div className='home-page'>
          <Navbar/>
          <Home/>
        </div>
      </section>
      <section className='product-container'>
        <div className="product"></div>
        <Product />
      </section>
      <section className="value-container">
        <div className="values">
          <Value />
        </div>
      </section>
      <section className="container-contacts">
        <div className="contacts">
          <Contact/>
        </div>
      </section>

      <section className="footer-container">
        <div className="footer">
          <Footer/>
        </div>
      </section>
    </div>
  )
}

export default App
