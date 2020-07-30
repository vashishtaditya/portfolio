import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css'
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const App = () => {

  useEffect(() => {
    setTimeout(() => stopLoader(), 1000)
  }, []);


  const [bool, setBool] = useState()
  const updateInView = (view) => {
   setBool(view)
 }

  const stopLoader = () => {
    let element = document.getElementById('preloader')
    element.classList.add('loaded')
  }

  return  <Router basename="/"> 
            <div className="App" >
              <Loader/>
              <Navbar updateInView={bool}/>
              <Home updateInView={updateInView}/>
              <About/>
              <Portfolio/>
              <Footer/>
            </div>
            </Router>
}

export default App;
