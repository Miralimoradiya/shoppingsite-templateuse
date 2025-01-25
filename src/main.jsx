import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/img/favicon.ico";
import "./assets/img/apple-icon.png";
// assets 
import "./assets/css/bootstrap.min.css"
import "./assets/css/fontawesome.css"
import "./assets/css/fontawesome.min.css"
import "./assets/css/slick-theme.css"
import "./assets/css/slick-theme.min.css"
import "./assets/css/slick.min.css"
import "./assets/css/templatemo.css"
import "./assets/css/templatemo.min.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
