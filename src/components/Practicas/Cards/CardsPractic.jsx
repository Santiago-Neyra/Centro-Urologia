import { Button, Card, Col } from "react-bootstrap"


export const CardsPractic = ({ data }) => {
    return (
        <>
            {data && data.map((info, i) => (
                <Col
                    key={i}
                    style={{
                        width: '400px'
                    }}>
                    <Card border="light">
                        <Card.Title
                            style={{ fontWeight: 'bold' }}
                        >
                            {`${info.name}`}
                        </Card.Title>

                        <Card.Img
                            variant="top"
                            src={info.thumbnail ? info.thumbnail : ''} />
                        <Card.Body>
                            <Button style={{
                                padding: '.7rem 1rem',
                                fontSize: '1.2rem',
                                backgroundColor: '#45833a',
                                border: 'none',
                                width: '180px'
                            }}>Leer más</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </>
    )
}
