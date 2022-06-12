
import { Button, Card, Col, Row } from "react-bootstrap"


export const CardsGridNosot = ({ dataNos }) => {
    return (
        <>
            {dataNos && dataNos.map((info, i) => (
                <Col
                    key={i}
                    style={{
                        width: '400px'
                    }}>
                    <Card border="light">
                        <Card.Img
                            variant="top"
                            src={info.thumbnail ? info.thumbnail : ''} />
                        <Card.Body>
                            <Card.Title
                                style={{ fontWeight: 'bold' }}
                            >{`${info.name && 'Dr. ' + info.name} ${info.apellido && info.apellido}, ${info.cert && info.cert}`}</Card.Title>
                            <Card.Text>
                                {info.info}
                            </Card.Text>
                            {/* <Button style={{
                                padding: '.7rem 1rem',
                                fontSize: '1.2rem',
                                backgroundColor: '#45833a',
                                border: 'none',
                                width: '180px'
                            }}>Leer más</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </>
    )
}
