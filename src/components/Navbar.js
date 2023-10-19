import logo from '../assets/logo.svg'; // Tell webpack this JS file uses this image

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand bg-dark">
            <div className="container">
                <a href="#" className="navbar-brand">
                    <img src={logo} alt="Chats App" />
                </a>
            </div>
        </nav>
    )
}