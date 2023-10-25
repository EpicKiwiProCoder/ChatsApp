import logo from '../assets/logo.png';
import { currentPage, setCurrentPage } from '../index';

const pageNames = [
    "Stuur een bericht",
    "Hoe deze website is gemaakt",
    "Wat is een front-end framework?",
    "Wat is een back-end?",
    "Hoe deze website de eisen verwerkt"
]

export const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-dark bg-dark">
            <div className="container">
                {/* eslint-disable-next-line */}
                <a onClick={() => setCurrentPage(0)} href="javascript:void(0)" className="">
                    <img src={logo} alt="Chats App" />
                </a>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapseTarget">
                    <div className="navbar-toggler-icon"></div>
                </button>

                <div className="collapse navbar-collapse" id="collapseTarget">
                    <ul className="navbar-nav">
                        {pageNames.map((pageName, pageIndex) => (
                            <li className="nav-item">
                                {/* eslint-disable-next-line */}
                                <a onClick={() => setCurrentPage(pageIndex)} href="javascript:void(0)" className={"nav-link text-end fs-5 " + (currentPage === pageIndex ? "active" : null)}>{pageName}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav >
    )
}