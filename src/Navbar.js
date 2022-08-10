import { useLocation  } from "react-router-dom"
import Navigation from "./pages/Navigation"
import NavigationDs from "./pages/NavigationDs";

export default function Navbar() {
    const location = useLocation();
    if(location.pathname !== '/marketplace') {
        return <NavigationDs />
    } else {
        return <Navigation />
    }
}