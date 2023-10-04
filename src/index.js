import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

axios.defaults.baseURL = "https://fundacion-uno.onrender.com/"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>
);



