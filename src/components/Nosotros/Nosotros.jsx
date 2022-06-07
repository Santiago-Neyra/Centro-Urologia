// import React from "react";

// import { Button, Card, Col, Row } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { dataNosotros } from "../helpers/helpers";
import { TitulosSecciones } from "../TitulosSecciones/TitulosSecciones";
import { CardsGridNosot } from "./Cards/CardsGrid";


export const Nosotros = () => {
    return (
        <>
            <TitulosSecciones tittle={'Sobre nosotros'}/>
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