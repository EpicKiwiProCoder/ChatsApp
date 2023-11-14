import "../stylesheets/Standard.css"

import { Navbar } from "../components/Navbar"

import Node from "../assets/carousel/Node.png"
import Django from "../assets/carousel/Django.png"
import Deno from "../assets/carousel/Deno.png"
import Spring from "../assets/carousel/Spring.png"
import Asp from "../assets/carousel/Asp.png"
import Laravel from "../assets/carousel/Laravel.png"
// import Firebase from "../assets/carousel/Firebase.png"

export const BackendPage = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-9 ">
                        <div className=" mt-4 p-5 pt-3 border-start border-secondary border-2">

                            <h1 className="display-4">Wat is een back-end?</h1>
                            <p>De backend van een website verwijst naar het gedeelte van de website dat niet direct zichtbaar is voor de gebruikers en waar de technische en functionele aspecten van de website worden beheerd. Het is verantwoordelijk voor de verwerking van gegevens, de logica van de applicatie en de interactie met de database. De backend is het "brein" van de website, en het zorgt ervoor dat de website goed functioneert.</p>

                            <div className="h2">Verschillende back-end keuzes</div>
                            <p>Tegenwoordig is er een overvloed aan keuzes als het gaat om website back-ends. De snelle technologische vooruitgang en de groeiende vraag naar online diensten hebben geleid tot een divers landschap van backend-technologieën. Of je nu een eenvoudige blog, een e-commerceplatform, een sociale netwerksite of een complexe bedrijfsapplicatie wilt ontwikkelen, er is een backend-optie die aan jouw specifieke behoeften kan voldoen.</p>


                            <div className="h2">De populairste back-ends en hun programmeertalen</div>
                            <div id="carouselExampleCaptions" className="carousel slide carousel-dark">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={Deno} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h4>Javascript</h4>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Laravel} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h4>PHP</h4>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Django} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h4>Python</h4>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Node} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h4>Javascript</h4>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Spring} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h4>Java</h4>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Asp} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h4>C#</h4>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}