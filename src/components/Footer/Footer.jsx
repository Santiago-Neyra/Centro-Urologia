import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css"
import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';


export const Footer = () => {
    return (
        <div className="contenedor-footer">
            <div className="row row-1-footer mx-auto">
                <div className="col-lg-3 justify-content-center align-items-center">
                    <img
                        className="icon-footer"
                        src="https://i.postimg.cc/GhRrq0sD/a0831456-7d61-4379-b9b5-d6bb43160054-1.png"
                        alt="" />
                </div>
                <div className="col-lg-6 d-none d-sm-flex align-items-center justify-content-center cont-dos-footer">
                    <Link to="/">Inicio</Link>
                    <Link to="/Nosotros">Nosotros</Link>
                    <Link to="/Practicas">Prácticas</Link>
                    <Link to="/Tecnologias">Tecnologías</Link>
                    <Link to="/Contacto">Contacto</Link>
                </div>
                <div className="col-lg-3 d-flex justify-content-center align-items-center">
                    <a href="# ">
                        <BsInstagram className="icons" style={{ color: "black" }} /></a>
                    <a href="https://www.facebook.com/Centro-de-Urología-CDU-478609279004909" rel="noreferrer" target="_blank">
                        <BsFacebook className="icons" style={{ color: "black" }} > </BsFacebook></a>
                    <a href="# ">
                        <BsWhatsapp className="icons" style={{ color: "black" }} > </BsWhatsapp></a>
                </div>
            </div>
            <div className="row-2-footer">
                <i>© 2022 All rights reserved</i>
                <i>Terms of service</i>
            </div>
            <div></div>

        </div>
    )
}