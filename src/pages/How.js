import { Navbar } from "../components/Navbar"
import { Accordion } from "../components/Accordion"

export const HowPage = () => {
    return (
        <div className="How">
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-9 ">
                        <div className=" mt-4 p-5 pt-3 border-start border-secondary border-2">

                            <h1 className="display-4">Hoe deze website is gemaakt</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo exercitationem, ad numquam aliquid, in eaque aliquam, rerum consequuntur deserunt repudiandae vel non deleniti corrupti facilis magni. Quasi dicta totam cumque earum alias soluta nihil eaque maxime officiis nostrum maiores eos voluptatum qui nobis libero optio facilis similique, vero nam? Nihil eos rem eum reiciendis cumque nam quia. Nemo sit repellat error. Consequuntur provident deleniti asperiores quis, harum atque necessitatibus tenetur quos dolorum vel architecto voluptas consequatur at obcaecati sint tempora voluptatum dignissimos, accusamus in ut molestiae! Nostrum similique, dolore est accusamus pariatur veritatis et dolores optio dolorem explicabo dolorum laboriosam.</p>

                            <div className="h2">De Tools die ik heb gebruikt</div>
                            <Accordion />


                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>
    )
}