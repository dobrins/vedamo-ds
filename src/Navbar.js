import { Link, useResolvedPath, useMatch, useParams, useLocation  } from "react-router-dom"
import Navigation from "./pages/Navigation"

export default function Navbar() {
    const location = useLocation();
    if(location.pathname !== '/marketplace') {
        return (
        <>

               
            <ul className="navigation-vertical p-3">
                <CustomLink to="/colors">Colors</CustomLink>
                <CustomLink to="/typography">Typography</CustomLink>
                <CustomLink to="/buttons">Buttons</CustomLink>
                <CustomLink to="/grid">Grid</CustomLink>
                <CustomLink to="/spacing-system">Spacing System</CustomLink>
                <CustomLink to="/icons">Icons</CustomLink>
                <CustomLink to="/alerts">Alerts</CustomLink>
            </ul>           

        </>)
    } else {
        return <Navigation />
    }
}

function CustomLink({to, children, ...props}) {

    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch( { path: resolvedPath.pathname, end: true} )

    return(
    
        <li className={ `mv-3 ${isActive ? "active" : "" }`}>
            <Link to={to} {...props}>
                {children} 
            </Link>
        </li>
    )
}