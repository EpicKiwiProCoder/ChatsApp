import { useState } from "react";
import { Navbar } from "../components/Navbar"

export const EisenPage = () => {
    const [textContent, setTextContent] = useState("VEEG HIEROVER")

    const cycleText = (goalText) => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let iterations = 0;
        const interval = setInterval(() => {
            setTextContent(textContent.split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return goalText[index]
                    }
                    return letters[Math.floor(Math.random() * 26)]
                }).join(""));

            if (iterations >= goalText.length) clearInterval(interval);
            iterations += 1 / 6
        }, 30);
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-9 ">
                        <div className=" mt-4 p-5 pt-3 border-start border-secondary border-2">

                            <h1 className="display-4">Hoe deze website de eisen verwerkt</h1>

                            <div className="h2">Gebruik Chat-GPT</div>
                            <p>Deze website bevat nergens code gegenereerd met Chat-GPT</p>

                            <div className="h2">Usability</div>
                            <ol class="list-group list-group-numbered">
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Consistentie en standaarden</div>
                                        De elementen van deze website zijn allemaal op een zelfde manier en in een gelijk thema gestyled
                                    </div>

                                    <span class="badge bg-primary rounded-pill">4</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Error preventie en tolerantie</div>
                                        De UI is duidelijk en in de code is ervoor gezorgd dat de applicatie niet zal crashen als de gebruiker iets niet goed doet
                                    </div>
                                    <span class="badge bg-primary rounded-pill">5</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Flexibiliteit en efficiëntie</div>
                                        Het verrichten van een bepaalde actie, zoals het sturen van een bericht of het wisselen van pagina is snel en gemakkelijk
                                    </div>
                                    <span class="badge bg-primary rounded-pill">7</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Esthetisch en minimalistisch ontwerp</div>
                                        In de website zitten weinig afleidende elementen die de gebruikerservaring zouden kunnen hinderen
                                    </div>
                                    <span class="badge bg-primary rounded-pill">8</span>
                                </li>
                            </ol>

                            <div className="h2">Accessibility</div>
                            <ol class="list-group list-group-numbered">
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Waarneembaar</div>
                                        Alle teksten en knoppen in deze website zijn groot genoeg om gelezen te kunnen worden door slechtzienden
                                    </div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Bedienbaar</div>
                                        Knoppen zijn duidelijk aangegeven, en hun bijbehorende labels zijn duidelijk
                                    </div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Kleurgebruik</div>
                                        Ook kleurenblinden kunnen deze website goed gebruiken omdat de gebruiker nergens afhankelijk is van het herkennen van een bepaalde kleur
                                    </div>
                                </li>
                            </ol>

                            <div className="h4 text-center mt-5">Gemaakt door:</div>
                            <div className="text-center"><span className="fs-1 fw-bold font-monospace" onMouseOver={() => cycleText("CLEMENS RETRA ")}>{textContent}</span></div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </>
    )
}