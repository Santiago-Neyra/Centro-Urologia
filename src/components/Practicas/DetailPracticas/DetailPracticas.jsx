import { useParams } from "react-router-dom"
import { TitulosSecciones } from "../../TitulosSecciones/TitulosSecciones"

export const DetailPracticas = ({ data }) => {

    const { namePractica } = useParams()
    console.log(namePractica)

    const dataMap = data.filter((dat) => dat.title === namePractica)

    return (
        <>
            {
                dataMap && dataMap.map((data, i) => (
                    <div key={i}>

                        <TitulosSecciones tittle={data.title} />
                        <p>{data.details.isWhat.info_1 && data.details.isWhat.info_1}</p>
                        {data.details.isWhat.info_2 && <p>{data.details.isWhat.info_2}</p>}


                        {
                            data.details.isWhat.whyDo &&
                            <div>
                                <h4>¿Porque se realiza?</h4>

                                <p>{data.details.isWhat.whyDo}</p>
                            </div>
                        }

                        {
                            data.details.isWhat.whatConsist &&
                            <div>
                                <h4>¿En que consiste?</h4>

                                <p>{data.details.isWhat.whatConsist}</p>
                            </div>
                        }

                        {
                            data.details.isWhat.prepare &&
                            <div>
                                <h4>Preparacion para {data.title}</h4>

                                <p>{data.details.isWhat.prepare}</p>
                            </div>
                        }

                        {
                            data.details.isWhat.procces &&
                            <div>
                                <h4>Procedimiento</h4>

                                <p>{data.details.isWhat.procces}</p>
                            </div>
                        }
                    </div>
                ))
            }



        </>
    )
}
