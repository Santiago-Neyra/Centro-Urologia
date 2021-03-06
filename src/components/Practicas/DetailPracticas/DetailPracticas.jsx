import { useParams } from "react-router-dom"
import { TitulosSecciones } from "../../TitulosSecciones/TitulosSecciones"
import '../DetailPracticas/Detailpracticas.css'
import imgUrol from "../../../assets/practicas/uroflujometria.jpg"

export const DetailPracticas = ({ data }) => {

    const { namePractica } = useParams()

    const dataMap = data.filter((dat) => dat.title === namePractica)

    return (
        <div>

            {
                dataMap && dataMap.map((data, i) => (
                    <div key={i}>

                        <TitulosSecciones tittle={data.title} />
                        <div className="container-detail-practicas row">
                            <div className="col-8">
                                <h4 className="tittle-practicas">Descripción</h4>
                                <p className="text-practicas">{data.details.isWhat.info_1 && data.details.isWhat.info_1}</p>
                                {data.details.isWhat.info_2 && <p className="text-practicas">{data.details.isWhat.info_2}</p>}


                                {
                                    data.details.isWhat.whyDo &&
                                    <div>
                                        <h4 id="realiza" className="tittle-practicas">¿Porque se realiza?</h4>
                                        <p className="text-practicas">{data.details.isWhat.whyDo}</p>
                                    </div>
                                }

                                {
                                    data.details.isWhat.whatConsist &&
                                    <div>
                                        <h4 id="consiste" className="tittle-practicas">¿En que consiste?</h4>
                                        <p className="text-practicas">{data.details.isWhat.whatConsist}</p>
                                    </div>
                                }

                                {
                                    data.details.isWhat.prepare &&
                                    <div>
                                        <h4 id="preparacion" className="tittle-practicas">Preparacion para {data.title}</h4>
                                        <p className="text-practicas">{data.details.isWhat.prepare}</p>
                                        {data.details.isWhat.prepareli &&
                                            <ul className="ulPract">
                                                {data.details.isWhat.prepareli.map((li) =>
                                                    <li key={li}>{li}</li>
                                                )}
                                            </ul>
                                        }
                                    </div>
                                }

                                {
                                    data.details.isWhat.process &&
                                    <div>
                                        <h4 id="procedimiento" className="tittle-practicas">Procedimiento: </h4>
                                        {data.details.isWhat.process.slice(0, 3).map((pro, i) =>
                                            <p className="text-practicas" key={i}>{pro}</p>
                                        )}
                                        <div className="ctn-imgUrofluj">
                                            <img src={imgUrol} alt="proceso uroflojumetris" />
                                        </div>
                                        {data.details.isWhat.process.slice(3).map((pro, i) =>
                                            <p className="text-practicas" key={i}>{pro}</p>
                                        )}
                                    </div>
                                }
                            </div>
                            <div className="col-3">
                                <div className="list-group">
                                    <a href="/# " className="list-group-item list-group-item-action cardsAside">
                                        Descripción
                                    </a>
                                    <a href="#realiza " className="list-group-item list-group-item-action cardsAside">¿Por qué se realiza?</a>
                                    <a href="#consiste " className="list-group-item list-group-item-action cardsAside">¿En qué consiste?</a>
                                    <a href='#preparacion ' className="list-group-item list-group-item-action cardsAside">Preparación</a>
                                    <a href="#video " className="list-group-item list-group-item-action cardsAside">Video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
