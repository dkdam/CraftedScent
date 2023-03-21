
export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">
                Scented Craft
            </a>
            <ul>
                <li className="active">
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
    )
}