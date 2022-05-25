import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css"
import { BsInstagram } from 'react-icons/bs';
export const Footer=()=>{
    return(
        <div className="contenedor-footer">
            <div className="row row-1-footer">
                <div className="col-lg-3 justify-content-center align-items-center"><img src="https://i.postimg.cc/GhRrq0sD/a0831456-7d61-4379-b9b5-d6bb43160054-1.png"></img></div>
                <div className="col-lg-6 d-flex align-items-center justify-content-center cont-dos-footer">
                    <Link to="/">Inicio</Link>
                    <Link to="/Nosotros">Nosotros</Link>
                    <Link to="/Practicas">Prácticas</Link>
                    <Link to="/Tecnologias">Tecnologías</Link>
                    <Link to="/Contacto">Contacto</Link>
                </div>    
                <div className="col-lg-3 d-flex justify-content-center align-items-center"><a href="#"><  BsInstagram style={{color:"black"}} > </BsInstagram></a></div>
            </div>
            <div className="row-2-footer">
                <a>© 2022 All rights reserved</a>
                <a>Terms of service</a>
            </div>
            <div></div>

        </div>
    )

}