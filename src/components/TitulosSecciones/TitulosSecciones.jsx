
import "../TitulosSecciones/TitulosSecciones.css"

export const TitulosSecciones=({tittle})=>{
    return(
        <div className="contenedor-titulo-secciones">
            <h4 style={{transition:'300ms all'}}> {tittle} </h4>
        </div>
    )
}