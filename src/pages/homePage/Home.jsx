import "./homePage.scss";
import indv from '../../assets/Diseno-sin-titulo-8.png'
import pair from '../../assets/Diseno-sin-titulo-9.png'
import colect from '../../assets/O-1.png'
import mapa from '../../assets/CONÓCENOS.png'

export default function Home() {

    return (
        <div className="homePage">

            <div className="slider">
                <div>
                    <h3>Paddle Academy At Home</h3>
                    <h4>Tu Academia de Pádel A domicilio</h4><br></br>
                    <button>Conócenos</button>
                </div>
            </div>
            <div className="modalidades">
                <h3>Clases de Pádel a Domicilio</h3>
                <br></br>
                <h4>Nuestras clases de padel a domicilio se imparten en 3 modalidades, elija la que mejor se adapte a sus necesidades</h4>

            </div>
            <div className="tipos">
                <div>
                    <h4>INDIVIDUAL</h4>
                    <br />
                    <img src={indv} alt="" />
                </div>
                <div>
                    <h4>IN PAIRS</h4>
                    <br />
                    <img src={pair} alt="" />
                </div>
                <div>
                    <h4>COLECTIVE</h4>
                    <br />
                    <img src={colect} alt="" />
                </div>
            </div>
            <div className="modalidades">
                <h3>¿DÓNDE TRABAJAMOS?</h3>
                <br></br>
                <h4>Estas son las zonas dónde ofrecemos nuestras clases de padel a domicilio</h4>
                <br></br>
                <br></br>
                <img src={mapa} alt="" />
            </div>

        </div>
    );
};