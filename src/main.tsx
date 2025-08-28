import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/global.css';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <AboutPage /> },
  { path: '*', element: <NotFoundPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className='px-8 sm:px-12 md:px-20 lg:px-22 xl:px-28 2xl:px-40'>
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>
);
