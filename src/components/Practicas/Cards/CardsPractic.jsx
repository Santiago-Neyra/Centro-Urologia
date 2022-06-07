import { Button, Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"


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
                            {`${info.title}`}
                        </Card.Title>

                        <Card.Img
                            variant="top"
                            src={info.img ? info.img : ''} />
                        <Card.Body>
                            <Link to={`/practicas/${info.title}`}><Button style={{
                                padding: '.7rem 1rem',
                                fontSize: '1.2rem',
                                backgroundColor: '#45833a',
                                border: 'none',
                                width: '180px'
                            }}>Leer mas</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))
            }
        </>
    )
}
