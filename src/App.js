import './App.css';
import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/navBar/NavBar.jsx';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import QuienesSomos from './components/quienesSomos/QuienesSomos.jsx';
import ComponentePrueba from './components/ComponentePrueba';


function App() {
 
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/QuienesSomos' element={<QuienesSomos/>}/>
      <Route path='/prueba' element={<ComponentePrueba/>}/> 
     </Routes>
    
     <Footer/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
