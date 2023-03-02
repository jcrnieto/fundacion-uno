import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/navBar/NavBar.jsx';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
