import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Signup from './component/signup/Signup'; // Assuming Signup component is in the 'pages' folder
import Login from './component/login/Login'; // Assuming Login component is in the 'pages' folder
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/home" element={<App />} /> 
        </Routes>
    </Router>
  </React.StrictMode>
);
