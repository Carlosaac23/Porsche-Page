import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className='px-8 sm:px-12 md:px-20 lg:px-22 xl:px-28 2xl:px-40'>
      <App />
    </main>
  </React.StrictMode>
);
