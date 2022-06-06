import "../Tecnologias/Tecnologias.css"
import video from './video/video.mp4';

export const Tecnologias = ({ items }) => {

    return (
        <>
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
                <video className="video" controls src={video}></video>
            </div>
        </>
    )
}