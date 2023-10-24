import reactLogo from "../assets/reactLogo.png"
import firebaseLogo from "../assets/firebaseLogo.png"
import sqlLogo from "../assets/sqlLogo.png"
import vscodeLogo from "../assets/vscodeLogo.png"
import "../stylesheets/Standard.css"

export const Accordion = () => {
    return (
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        React
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>React: </strong><img className="rounded" src={reactLogo} /><br /><br />
                        Voor deze website heb ik een front-end framework gebruikt, er zijn veel van dit soort frameworks maar dit keer heb ik react gebruikt aangezien het het populairste framework op dit moment is. Naast deze website zijn er nog veel meer websites die gemaakt zijn met react namelijk: <strong>Facebook, Instagram, Netflix en WhatsApp</strong>. Je kunt daarom zeker zeggen dat het een proffesionele manier om een website te bouwen is! Lees meer op de pagina: Wat is een front-end framework?
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                        Firebase
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>Firebase: </strong><img className="rounded" src={firebaseLogo} /><br /><br />
                        Om een website te bouwen die bijvoorbeeld onthoud welke berichtjes er allemaal al gestuurd zijn heb je een back-end nodig, dit is een programma dat draait op een server, dus niet op de computer waarop je deze website nu bekijkt! Dit moet ook wel, want stel deze website had alleen maar front-end html code gehad dan zouden alle berichtjes die je stuurt weg gegooid worden als je de website sluit, en zouden de andere gebruikers van de website deze berichtjes nooit kunnen ontvangen. Om mijn backend te programeren heb ik een framework gebruikt dat Firebase heet, deze tool is gemaakt door google, en het is daarom ook mogelijk om authenticatie met een google-account te integreren in je eigen website. Ook wordt de hosting van deze website gedaan met Firebase. Lees meer op de pagina: Wat is een back-end?
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                        SQL-Database
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>SQL-Database: </strong><img className="rounded" src={sqlLogo} /><br /><br />
                        Om data op te slaan binnen een web applicatie gebruikt je een database. Een database is een georganiseerde verzameling gestructureerde informatie of data. Om data op te slaan in zo'n database heb je een andere programeertaal nodig dan voor de rest van deze website, namelijk SQL <strong>Structured Query Language</strong>. Zoals de naam al voorstelt is het een manier om een query (een opdracht) te beschrijven aan de database om zo een bepaald stuk data op te halen of juist op te slaan. Dit gebruik ik ook in deze website om de berichtjes die je stuurt op te slaan en daarna uit te lezen welke berichtjes er al gestuurd zijn om de zo op het scherm weer te geven.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                        Visual Studio Code
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>Visual Studio Code: </strong><img className="rounded" src={vscodeLogo} /><br /><br />
                        Ook wel VS-Code genoemd is een IDE <strong>Integrated Development Environment</strong> waarin ik deze app heb ontwikkeld. Op dit moment is dit de meest gebruikte IDE onder ontwikkelaars om een paar redenen:
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Het is Cross Platform en je kunt het draaien op alle besturingssystemen (zelfs op schoollaptops)</li>
                            <li class="list-group-item">Het ontersteunt practish elke programmeertaal</li>
                            <li class="list-group-item">Het heeft een mooie UI <strong>User Interface</strong></li>
                            <li class="list-group-item">Je kunt gemakkelijk containerization gebruiken door VM's <strong>Virtual Machines</strong> te starten met Docker</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}