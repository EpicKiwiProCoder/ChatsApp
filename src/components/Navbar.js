import logo from '../assets/logo.png';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a href="/" className="">
                    <img src={logo} alt="Chats App" />
                </a>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapseTarget">
                    <div className="navbar-toggler-icon"></div>
                </button>

                <div className="collapse navbar-collapse" id="collapseTarget">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="" className="nav-link text-bg-dark text-end fs-5">Berichten</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link text-bg-dark text-end fs-5">Over deze website</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link text-bg-dark text-end fs-5">Hoe werkt het?</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}