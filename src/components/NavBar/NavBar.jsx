import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
        <ul>
            <Link to={"/"}>inicio</Link>
            <Link to={"/nosotros"}>Nosotros</Link>
            <Link to={"/practicas"}>Practicas</Link>
            <Link to={"/tecnologia"}>Tecnologia</Link>
            <Link to={"/contacto"}>Contacto</Link>
        </ul>

        </>

    )
}