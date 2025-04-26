import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './styles/global.css'
import { LoadingProvider } from './components/LoadingProvider.jsx'
import { ThemeProvider } from './components/ThemeContext' // 🆕 import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider> {/* 🆕 wrap here */}
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </ThemeProvider>
  </StrictMode>
)
