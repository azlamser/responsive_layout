import { createRoot } from 'react-dom/client'
import "./main.css"
import App from './App.jsx'
import Navbar from './Nav.jsx'

let discription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque molestias amet repudiandae reiciendis vel, ex eaque. Quibusdam eum dignissimos iste."
createRoot(document.getElementById('root')).render(
  <>
<Navbar/>
<App/>

</>
)
  

