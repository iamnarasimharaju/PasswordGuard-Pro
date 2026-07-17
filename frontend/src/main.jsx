import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "@fontsource/inter";
import "@fontsource/poppins/700.css";
import "@fontsource/jetbrains-mono";
import "./styles/theme.css";
import "./styles/components.css";
import "./styles/analyzer.css";

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
