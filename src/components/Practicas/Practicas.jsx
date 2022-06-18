import { Row } from "react-bootstrap"
import { dataPracticas } from "../helpers/helpers"
import { TitulosSecciones } from "../TitulosSecciones/TitulosSecciones"
import { CardsPractic } from "./Cards/CardsPractic"
import '../Practicas/Practicas.css'



export const Practicas = () => {
    return (
        <>
            <TitulosSecciones tittle={'Practicas realizadas'} />
            <Row
                xs={1}
                md={2}
                className="g-4"
                style={{
                    gap: '1rem 10rem',
                    justifyContent: 'center'
                }}>
                <CardsPractic data={dataPracticas} />
            </Row>
        </>
    )
}
