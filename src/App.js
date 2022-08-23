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
import ButtonGroups from "./pages/ButtonGroups"
import Navigation from "./pages/Navigation"
import Badges from "./pages/Badges"
import Position from "./pages/Position"
import companyLogo from './img/logo.svg';

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

  if(location.pathname !== '/marketplace') {
  
  return (
      <>        
        <div className="grid gap-0 main-container">
          <div className="flex flex-center-v bg-default-300 ph-4 gap-5">
            <div className="dropdownMenu hidden-m">
              <button className="dropdownBtn btn btn-tertiary btn-square btn-xs" onClick={() => setOpen(!open)}>
                <i className="i icon-menu"></i>
              </button>
                {dropdown()}
            </div>
            <img src={companyLogo} alt="Vedamo Logo" width="140" />
          </div>

          <div className="flex gap-0">
            <aside className="sidebar bg-default-0 bs-xl position-relative">
              <Navbar />
            </aside>
          
            <div className="container pv-4 bg-default-150 flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/colors" element={<Colors />} />
                <Route path="/typography" element={<Typography />} />
                <Route path="/buttons" element={<Buttons />} />
                <Route path="/button-groups" element={<ButtonGroups />} />
                <Route path="/grid" element={<Grid />} />
                <Route path="/spacing-system" element={<SpacingSystem />} />
                <Route path="/icons" element={<Icons />} />
                <Route path="/login" element={<Login />} />  
                <Route path="/marketplace" element={<Marketplace />} />  
                <Route path="/alerts" element={<Alerts />} />  
                <Route path="/shadows" element={<Shadows />} />  
                <Route path="/border-radius" element={<BorderRadius />} />  
                <Route path="/Blur" element={<Blur />} />  
                <Route path="/Badges" element={<Badges />} />  
                <Route path="/Position" element={<Position />} />  
                <Route path="*" element={<NotFound />} />  
              </Routes>
            </div>
          </div>
        </div>
      </>
  )
  } else {
    return (
      <>
        <Navigation />
        <Routes>
          <Route path="/marketplace" element={<Marketplace />} />  
        </Routes>
       </>
    )
  }
}

export default App;