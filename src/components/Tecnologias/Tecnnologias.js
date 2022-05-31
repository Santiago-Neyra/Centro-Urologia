import "../Tecnologias/Tecnologias.css"
import {TitulosSecciones} from "../TitulosSecciones/TitulosSecciones"
import video from './video/video.mp4';
export const Tecnologias=()=>{
    const items=[
        {
        item:"La litotricia extracorpórea es un tratamiento ambulatorio."
        },
        {
            item:" No existen límites de edad para su aplicación"
        },
        {
            item:"Puede utilizarse en la mayoría de los casos de cálculos de la vía urinaria."
        },
        {
            item:"No requiere anestesia."
        },
        {
            item:"Es un procedimiento no invasivo de gran eficacia."
        },
        {
            item:"Evita la cicatriz de la cirugía."
        },
        {
            item:"Mínimo riesgo de complicaciones."
        },
        {
            item:"Menor riesgo de infección."
        },
        {
            item:"El tiempo de recuperación se reduce a horas."
        },
        {
            item:"No permite que usted baje su capacidad laboral al tener un rápido retorno al trabajo."
        },
    ]

    return(
        <>
            <TitulosSecciones tittle="Litotricia extracorpórea"/>
            <div className="container tecnologias-container">
                <p className="texto-litro">La litotricia extracorpórea es un tratamiento no invasivo que consiste en la fragmentación de la litiasis, a través de la aplicación de ondas de choque generadas externamente, decir fuera del cuerpo. El impacto de esta energía en el calculo, permite que este se desintegre</p>
                <h5 className="t-beneficios">Beneficios:</h5>
                {items.map(e=>{
                    return(
                    <div className="container-item">
                            <p><span><img className="img-item" src="https://i.postimg.cc/cJDKQs1G/imagen-2022-05-31-191014495.png" alt="" /></span>{e.item}</p>
                    </div>
                    )
                })}
                <video className="video" controls src={video}></video>
            </div>
        </>
    )
}