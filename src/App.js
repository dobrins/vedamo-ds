import { Route, Routes, useLocation  } from "react-router-dom"
import {useState} from 'react'
import Navbar from "./Navbar"
import Home from "./pages/Home"
import Grid from "./pages/Grid"
import Colors from "./pages/Colors"
import Typography from "./pages/Typography"
import Buttons from "./pages/Buttons"
import SpacingSystem from "./pages/SpacingSystem"
import Icons from "./pages/Icons"
import Login from "./pages/Login"
import Marketplace from "./pages/Marketplace.js"
import Alerts from "./pages/Alerts"
import NotFound from "./pages/NotFound"
import Dropdown from "./pages/Dropdown"
import Shadows from "./pages/Shadows"
import BorderRadius from "./pages/BorderRadius"
import Blur from "./pages/Blur"

function App() {

  const location = useLocation();
  const [open, setOpen] = useState(false);

  const dropdown = () => {
    if(open) {

      return (
        <div className="dropdownContent p-2">
          <Dropdown />
        </div>
      )
    }
  }

  return (
      <div>
        <aside className="sidebar">
          <Navbar />
        </aside>
        
        <div className="main-container flex flex-vertical gap-0">
          <div className="flex flex-center-v bg-default-300 p-2 gap-5">
            
            <div className="dropdownMenu hidden-m">
              <button className="dropdownBtn btn btn-tertiary btn-square" onClick={() => setOpen(!open)}>
                <i className="i icon-menu"></i>
              </button>
                {dropdown()}
            </div>
            
            <h2 className="fz-display-xs" id="pageTitle">{ location.pathname.substring(1) }</h2>
    
          </div>
          <div className="container pv-7 bg-default-150 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/colors" element={<Colors />} />
              <Route path="/typography" element={<Typography />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/grid" element={<Grid />} />
              <Route path="/spacing-system" element={<SpacingSystem />} />
              <Route path="/icons" element={<Icons />} />
              <Route path="/login" element={<Login />} />  
              <Route path="/marketplace" element={<Marketplace />} />  
              <Route path="/alerts" element={<Alerts />} />  
              <Route path="/shadows" element={<Shadows />} />  
              <Route path="/border-radius" element={<BorderRadius />} />  
              <Route path="/Blur" element={<Blur />} />  
              <Route path="*" element={<NotFound />} />  
            </Routes>
          
          </div>
        </div>
      </div>
  )
}

export default App;