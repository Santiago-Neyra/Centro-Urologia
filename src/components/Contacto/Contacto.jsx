import { TitulosSecciones } from "../TitulosSecciones/TitulosSecciones"
import "./Contacto.css"

export const Contacto = () => {
    return (
        <> 
        <TitulosSecciones tittle={'Contacto'}/>
            <div className="contacto-container">
                <div className="row-contacto row">
                    <div className="d-none d-xl-flex col-lg-6 container-pic">
                        <img className="imagen" src="https://i.postimg.cc/N0gH0gns/contacto.jpg" alt="" />

                    </div>
                    <div className="col-xl-6 container-form">
                        <div className="container-titulo-contacto">
                            <h4 className="tittle-form">Atención a pacientes y comunidad</h4>
                        </div>
                        <div className="container-form">

                            <form className="formulario">
                                <div className="input-group mb-3">
                                    <span
                                        className="input-group-text d-sm-flex d-none" id="basic-addon1">Nombre y Apellido</span>
                                    <input
                                        type="text" className="form-control input-form" placeholder="Nombre y Apellido" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <span
                                        className="input-group-text d-sm-flex d-none" id="basic-addon1">Correo electrónico</span>
                                    <input
                                        type="text" className="form-control input-form" placeholder="Correo electrónico" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <span
                                        className="input-group-text d-sm-flex d-none" id="basic-addon1">Teléfono de contacto</span>
                                    <input

                                        type="text" className="form-control input-form" placeholder="Teléfono de contacto" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text d-sm-flex d-none">Consulta</span>
                                    <textarea
                                        className="form-control input-form" placeholder="Consulta"
                                        aria-label="With textarea"></textarea>
                                </div>
                                <button className="boton-consulta">Enviar consulta</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container-ley">
                    <p className="texto-ley">Al enviar su consulta está aceptando la Ley Nº 25.326 que tiene por objeto la protección integral de los datos personales asentados en archivos, registros, bancos de datos, u otros medios técnicos de tratamiento de datos, sean éstos públicos, o privados destinados a dar informes, para garantizar el derecho al honor y a la intimidad de las personas, así como también el acceso a la información que sobre las mismas se registre, de conformidad a lo establecido en el artículo 43, párrafo tercero de la Constitución Nacional (art. 1 de la ley 25.326)</p>
                </div>
                <div className="container-map">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14322.810893504178!2d-58.1712641!3d-26.1738094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xecb0b85003f1be92!2sCentro%20De%20Urologia!5e0!3m2!1ses-419!2sar!4v1653434009919!5m2!1ses-419!2sar" className="map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )

}