import imagen from "../assets/lana.jpg";
import "./Hero.css";

function Hero(){

    const empresa="LanaAndina";

    return(

        <section className="hero">

            <img src={imagen} alt="Productos en lana"/>

            <div>

                <h1>Bienvenido a {empresa}</h1>

                <p>

                    Elaboramos gorros, bufandas y guantes hechos
                    totalmente a mano con lana de excelente calidad.

                </p>

            </div>

        </section>

    )

}

export default Hero;