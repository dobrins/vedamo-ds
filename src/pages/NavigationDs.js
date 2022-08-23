import { Link, useResolvedPath, useMatch  } from "react-router-dom"

export default function NavigationDs() {

    return (
        <ul className="navigation-vertical p-3">
            <CustomLink to="/alerts">Alerts</CustomLink>
            <CustomLink to="/badges">Badges</CustomLink>
            <CustomLink to="/blur">Blur</CustomLink>
            <CustomLink to="/border-radius">Border Radius</CustomLink>
            <CustomLink to="/button-groups">Button Groups</CustomLink>
            <CustomLink to="/buttons">Buttons</CustomLink>
            <CustomLink to="/colors">Colors</CustomLink>
            <CustomLink to="/grid">Grid</CustomLink>
            <CustomLink to="/icons">Icons</CustomLink>
            <CustomLink to="/position">Position</CustomLink>
            <CustomLink to="/shadows">Shadows</CustomLink>
            <CustomLink to="/spacing-system">Spacing System</CustomLink>
            <CustomLink to="/typography">Typography</CustomLink>
        </ul>
    )
}

function CustomLink({to, children, ...props}) {

    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch( { path: resolvedPath.pathname, end: true} )

    return(
        <li className={ `${isActive ? "active" : "" }`}>
            <Link className="br-1 flex flex-center-v" to={to} {...props}>
                <i className="i icon-arrow-right"></i> {children} 
            </Link>
        </li>
    )
}