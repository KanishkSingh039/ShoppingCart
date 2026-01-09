
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Globalprovider } from './context/index.jsx'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Globalprovider>
        <App/>
        </Globalprovider>
     </BrowserRouter>
)
