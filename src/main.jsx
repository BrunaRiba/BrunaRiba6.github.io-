import { StrictMode } from 'react' // Importa o StrictMode do React para ajudar a identificar potenciais problemas na aplicação
import { createRoot } from 'react-dom/client' // Método para renderizar a aplicação na DOM
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'

// Método para renderizar a aplicação na DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Envolve o componente App no StrictMode para verificar boas práticas e avisos */}
    <App />
  </StrictMode>,
)