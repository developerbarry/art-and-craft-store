import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import routes from './routes/mainRoutes.jsx';
import { BrowserRouter, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {routes}
      </Routes>
    </BrowserRouter>
  </StrictMode>,


)
