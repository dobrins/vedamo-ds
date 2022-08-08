import { Link, useResolvedPath, useMatch, useParams, useLocation  } from "react-router-dom"
import Navigation from "./pages/Navigation"

export default function Navbar() {
    const location = useLocation();
    if(location.pathname !== '/marketplace') {
        return (
        <>

               
            <ul className="navigation-vertical p-3">
                <CustomLink to="vedamo-ds/colors">Colors</CustomLink>
                <CustomLink to="vedamo-ds/typography">Typography</CustomLink>
                <CustomLink to="vedamo-ds/buttons">Buttons</CustomLink>
                <CustomLink to="vedamo-ds/grid">Grid</CustomLink>
                <CustomLink to="vedamo-ds/spacing-system">Spacing System</CustomLink>
                <CustomLink to="vedamo-ds/icons">Icons</CustomLink>
                <CustomLink to="vedamo-ds/alerts">Alerts</CustomLink>
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