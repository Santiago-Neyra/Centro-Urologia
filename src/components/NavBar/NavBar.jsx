import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
        <ul>
            <Link to={"/"}>inicio</Link>
            <Link to={"/Nosotros"}>Nosotros</Link>
            <Link to={"/Practicas"}>Practicas</Link>
            <Link to={"/Tecnologias"}>Tecnologia</Link>
            <Link to={"/Contacto"}>Contacto</Link>
        </ul>

        </>

    )
}