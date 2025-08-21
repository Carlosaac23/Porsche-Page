import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className='px-8 sm:px-16 md:px-20 lg:px-40 xl:px-60 2xl:px-96'>
      <App />
    </main>
  </React.StrictMode>
);
