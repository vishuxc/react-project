import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RegForm } from './regform.jsx'

createRoot(document.getElementById('root')).render(
  
    <RegForm />
  
)
