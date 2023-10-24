import { Navbar } from "../components/Navbar"
import "../stylesheets/Standard.css"

export const FrontendPage = () => {
    return (
        <div className="Frontend">
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-9 ">
                        <div className=" mt-4 p-5 pt-3 border-start border-secondary border-2">

                            <h1 className="display-4">Wat is een front-end framework?</h1>
                            <p>Een front-end framework, ook wel een client-side framework genoemd, is een verzameling van gereedschappen, bibliotheken en richtlijnen die ontwikkelaars gebruiken om de gebruikersinterface van een website of webtoepassing te ontwerpen, ontwikkelen en beheren. Het doel van een front-end framework is om het proces van het bouwen van de front-end van een website efficiënter te maken en de consistentie en kwaliteit van de gebruikerservaring te verbeteren.</p>

                            <div className="h2">De verschillen tussen statishe HTML en front-end frameworks</div>
                            <p>Statische HTML en front-end frameworks zijn twee verschillende benaderingen voor het ontwikkelen van de gebruikersinterface van een website of webtoepassing. Het belangerijkste verschil hierbij ligt in de manier waarop een html pagina wordt gegenereerd.</p>

                            <div className="h4">Statishe HTML</div>
                            <p>Bij statishe HTML word er door de webbrowster een request gestuurt naar een hostingprovider voor een bepaalde webpagina, de URL zal er dan ongeveer zo uit zien <strong>Mijnwebsite.nl/pagina2.html</strong>. pagina2.html is in dat geval een statish HTML bestand met een bepaalde inhoud die al in de server is gegenereerd.</p>
                            <div className="h4">Een front-end framework</div>
                            <p>Bij een website met een front-end framework (net als deze website) werkt het compleet anders. De URL van zo'n website blijft altijd hetzelfde, ookal ga je naar een andere pagina. In plaats van een al gevult HTML bestand stuurt de server juist een compleet leeg bestand naar de gebruiker samen met een javascript bestand die terplekken op de gebruikers computer de website genereerd. Hierdoor kun je makkelijker een dynamische website maken.</p>


                            <div className="h2">Welke front-end frameworks zijn er op de markt?</div>
                            <table class="table table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Naam</th>
                                        <th scope="col">Full-stack framework</th>
                                        <th scope="col">Gemaakt door</th>
                                        <th scope="col">Sterkte punten</th>
                                        <th scope="col">Zwakte punten</th>
                                        <th scope="col">Moeilijkheid</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    <tr>
                                        <th scope="row">Angular</th>
                                        <td>Analog</td>
                                        <td>Alphabet</td>
                                        <td>Snel en robuust</td>
                                        <td>Redelijk oud</td>
                                        <td className="table-danger">Moeilijk</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">React</th>
                                        <td>Next.js</td>
                                        <td>Meta Platforms</td>
                                        <td>Super populair en veel plugins</td>
                                        <td>Te moeilijk voor begginers</td>
                                        <td className="table-danger">Moeilijk</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Vue.js</th>
                                        <td>Nuxt.js</td>
                                        <td>Open Source</td>
                                        <td>Simpel en intuitief</td>
                                        <td>Weinig plugin support</td>
                                        <td className="table-success">Makkelijk</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Svelte</th>
                                        <td>SvelteKit</td>
                                        <td>Open Source</td>
                                        <td>Extreem snel en low overhead</td>
                                        <td>Klein ecosysteem</td>
                                        <td className="table-success">Makkelijk</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>
    )
}