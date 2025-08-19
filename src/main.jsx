import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>
);
