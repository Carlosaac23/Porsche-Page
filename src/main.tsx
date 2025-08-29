import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/global.css';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '*', element: <NotFoundPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className='px-8 sm:px-12 md:px-20 lg:px-22 xl:px-28 2xl:px-40'>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          style: {
            background: '#0a0a0a',
            color: '#fafafa',
            borderColor: '#262626',
          },
        }}
      />
    </main>
  </React.StrictMode>
);
