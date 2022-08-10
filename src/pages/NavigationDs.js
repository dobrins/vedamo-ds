import { Link, useResolvedPath, useMatch  } from "react-router-dom"

export default function NavigationDs() {

    return (
        <ul className="navigation-vertical p-3">
            <CustomLink to="/colors">Colors</CustomLink>
            <CustomLink to="/typography">Typography</CustomLink>
            <CustomLink to="/buttons">Buttons</CustomLink>
            <CustomLink to="/grid">Grid</CustomLink>
            <CustomLink to="/spacing-system">Spacing System</CustomLink>
            <CustomLink to="/icons">Icons</CustomLink>
            <CustomLink to="/alerts">Alerts</CustomLink>
            <CustomLink to="/shadows">Shadows</CustomLink>
            <CustomLink to="/border-radius">Border Radius</CustomLink>
            <CustomLink to="/blur">Blur</CustomLink>
        </ul>
    )
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