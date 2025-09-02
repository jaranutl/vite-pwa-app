import { StrictMode } from 'react'
import ReactDOM  ,{ createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {initPWA} from './pwa.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
initPWA()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
