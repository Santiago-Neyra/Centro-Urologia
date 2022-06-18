import { ventajasTecnologia } from "../helpers/helpers";
import "../Tecnologias/Tecnologias.css"
import { TitulosSecciones } from "../TitulosSecciones/TitulosSecciones";
import video from './video/video.mp4';
import iconCheckGreenVent from '../../assets/tecnologias/iconCheck.svg'
import imgLitotr from '../../assets/tecnologias/litotri.jpg'

export const Tecnologias = ({ items }) => {

    return (
        <>
            <TitulosSecciones tittle={'Tecnologias'} />
            <div className="container tecnologias-container">
                <p className="texto-litro">La litotricia extracorpórea es un tratamiento no invasivo que consiste en la fragmentación de la litiasis, a través de la aplicación de ondas de choque generadas externamente, decir fuera del cuerpo. El impacto de esta energía en el calculo, permite que este se desintegre</p>
                <h5 className="t-beneficios">Beneficios:</h5>
                {items.map((e, i) => {
                    return (
                        <div className="container-item" key={i}>
                            <div className="d-flex">
                                <span className="span-item"><img className="img-item" src="https://i.postimg.cc/cJDKQs1G/imagen-2022-05-31-191014495.png" alt="" /></span><p className="text-item">{e.item}</p>
                            </div>
                        </div>
                    )
                })}
                <div className="containerQue">
                    <h5 className="t-beneficios tit-queson">¿Qué son las ondas de choque en la litotricia
                        extracorpórea?</h5>
                    <div className="text-queSon">
                        <p>La litotricia extracorpórea es un tratamiento no invasivo que consiste en la fragmentación de la litiasis, a traves de la
                            aplicación de ondas de choque generadas externamente, decir fuera del cuerpo. El impacto de esta energía en el
                            calculo, permite que este se desintegre y asi poder eliminar los fragmentos convertidos en arenilla a través de la orina.</p>
                    </div>
                </div>

                <div className="container-ventajas">
                    <h5 className="t-beneficios">Ventajas:</h5>
                    {ventajasTecnologia.map((e, i) => {
                        return (
                            <div className="container-item" key={i}>
                                <div className="d-flex itemVent">
                                    <span className="span-item"><img className="img-item" src={iconCheckGreenVent} alt="" /></span><p className="text-item">{e.ventaja}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="ctn-imgLitotri">
                    <img className="" src={imgLitotr} alt="litotricia" />
                </div>

                <video className="video" controls src={video}></video>
            </div>
        </>
    )
}