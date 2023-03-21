import { FC } from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Scented Craft
            </Link>
            <ul>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/login">Login</CustomLink>
            </ul>
        </nav>
    )
}

interface CustomLinkProps {
    to: string;
    children: React.ReactNode;
}

const CustomLink: FC<CustomLinkProps> = ({ to, children, ...props }) => {
    const path = window.location.pathname

    return(
        <li className= {path === to ? "active" : ""}>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    )
}