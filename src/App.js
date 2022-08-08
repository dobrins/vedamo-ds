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
import { Route, Routes, useLocation  } from "react-router-dom"

function App() {


  const location = useLocation();
  // console.log('hash', location.hash);
  // console.log('pathname', location.pathname);
  // console.log('search', location.search);

  return (
      <div>
        <aside className="sidebar">
          <Navbar />
        </aside>
        
        <div className="pl-17">

          <div className="flex flex-center-v bg-default-300 p-2 gap-5">

            <button type="button" className="btn btn-tertiary btn-square btn-l">
              <i className="i icon-menu"></i>
            </button>

            <h2 className="fz-display-xs">{ location.pathname.substring(1) }</h2>
    
          </div>

          <div className="container pv-7 bg-default-150">


            <Routes>
              <Route path="/vedamo-ds">
                <Route index element={<Home />} />
                <Route path="colors" element={<Colors />} />
                <Route path="typography" element={<Typography />} />
                <Route path="buttons" element={<Buttons />} />
                <Route path="grid" element={<Grid />} />
                <Route path="spacing-system" element={<SpacingSystem />} />
                <Route path="icons" element={<Icons />} />
                <Route path="login" element={<Login />} />  
                <Route path="marketplace" element={<Marketplace />} />  
                <Route path="alerts" element={<Alerts />} />  
                <Route path="*" element={<NotFound />} />  
              </Route>              
            </Routes>
          
          </div>
        </div>
      </div>
  )
}

export default App;