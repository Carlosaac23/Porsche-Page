import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className='px-8 sm:px-80 max-[400px]:bg-amber-400 sm:bg-red-400 md:bg-blue-400'>
      <App />
    </main>
  </React.StrictMode>
);
