import '../Mision/Mision.css'
import svgEtencion from '../../assets/misionVision/AtencionAlPaciente3.svg'
import svgExcelencia from '../../assets/misionVision/ExcelenciaMedica2.svg'
import svgObjetivo from '../../assets/misionVision/Objetivos1.svg'

export const Mision=()=>{
    return(
        <div className='mision-container'>
            <div className='row row-mision'>
                <div className='col-lg-3'>
                    <img className='imgMisionVision' src={svgEtencion} alt="mision" />
                    <h5 className='tittle-mision'>Nuestra misión</h5>
                    <p className='text-mision'> Atención urológica de vanguardia centrada en el paciente con integridad y compasión.</p>
                </div>
                <div className='col-lg-3'>
                    <img className='imgMisionVision' src={svgExcelencia} alt="mision" />
                    <h5 className='tittle-mision'>Excelencia médica</h5>
                    <p className='text-mision'>El CDU brinda una amplia gama de servicios especializados en el cuidado de diversas afecciones urológicas.</p>
                </div>
                <div className='col-lg-3'>
                    <img className='imgMisionVision' src={svgObjetivo} alt="mision" />
                    <h5 className='tittle-mision'>Atención al paciente</h5>
                    <p className='text-mision'>Nuestro personal de urólogos y uroginecólogos continuará con su dedicación a la atención de calidad y el compromiso de brindar atención médica de la más alta calidad.</p>
                </div>
            </div>

        </div>
    )
}