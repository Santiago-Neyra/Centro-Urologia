import { Row } from "react-bootstrap"
import { CardsPractic } from "./Cards/CardsPractic"


const dataPracts = [
    {
        name: 'nombrePractica',
        thumbnail: 'img.jpg'
    },
    {
        name: 'nombrePractica',
        thumbnail: 'img.jpg'
    }
]

export const Practicas = () => {
    return (
        <>
            <Row
                xs={1}
                md={2}
                className="g-4"
                style={{
                    gap: '10rem 15rem',
                    justifyContent: 'center'
                }}>

                <CardsPractic data={dataPracts} />
            </Row>
        </>
    )
}
