import logo from '../assets/logo.png';
import { currentPage, setCurrentPage } from '../index';

const pageNames = [
    "Stuur een bericht",
    "Hoe deze website is gemaakt",
    "Wat is een front-end framework?",
    "Wat is een back-end?",
    "Hoe deze website voldoet aan de eisen"
]

export const Navbar = () => {
    console.log(currentPage);
    return (
        <nav className="navbar sticky-top navbar-dark bg-dark">
            <div className="container">
                <a href="/" className="">
                    <img src={logo} alt="Chats App" />
                </a>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapseTarget">
                    <div className="navbar-toggler-icon"></div>
                </button>

                <div className="collapse navbar-collapse" id="collapseTarget">
                    <ul className="navbar-nav">
                        {pageNames.map((pageName, pageIndex) => (
                            <li className="nav-item">
                                <a onClick={() => setCurrentPage(pageIndex)} href="javascript:void(0)" className={"nav-link text-end fs-5 " + (currentPage === pageIndex ? "active" : null)}>{pageName}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav >
    )
}