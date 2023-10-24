import { Navbar } from "../components/Navbar"

export const BackendPage = () => {
    return (
        <div className="Backend">
            <Navbar />
            <div className="row">
                <div className="col-4"></div>
                <div className="col-8 border-start border-secondary border-2">

                    <div className="container pt-4">
                        <h1 class="display-4">Wat is een back-end?</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}