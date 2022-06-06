// import React from "react";

// import { Button, Card, Col, Row } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { dataNosotros } from "../helpers/helpers";
import { CardsGridNosot } from "./Cards/CardsGrid";


export const Nosotros = () => {
    return (
        <>
            <div style={{
                marginTop: '3rem',
                marginBottom: '8rem'
            }}>
                <h3 style={{ fontWeight: 'bold' }}>
                    Conozca a nuestro equipo de especialistas experimentados
                </h3>
            </div>
            <Row
                xs={1}
                md={2}
                className="g-4"
                style={{
                    gap: '10rem 15rem',
                    justifyContent: 'center'
                }}>
                <CardsGridNosot dataNos={dataNosotros} />
            </Row>

        </>
    )
};