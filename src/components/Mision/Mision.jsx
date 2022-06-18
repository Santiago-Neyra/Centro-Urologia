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
                    <p className='text-mision'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit at semper est vivamus. Purus nisl posuere amet, pharetra elementum suspendisse dictumst adipiscing sed. Facilisis vivamus eu mi, consectetur a senectus vitae turpis leo. Quam euismod velit quam dictum.</p>
                </div>
                <div className='col-lg-3'>
                    <img className='imgMisionVision' src={svgExcelencia} alt="mision" />
                    <h5 className='tittle-mision'>Excelencia médica</h5>
                    <p className='text-mision'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit at semper est vivamus. Purus nisl posuere amet, pharetra elementum suspendisse dictumst adipiscing sed. Facilisis vivamus eu mi, consectetur a senectus vitae turpis leo. Quam euismod velit quam dictum.</p>
                </div>
                <div className='col-lg-3'>
                    <img className='imgMisionVision' src={svgObjetivo} alt="mision" />
                    <h5 className='tittle-mision'>Atención al paciente</h5>
                    <p className='text-mision'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit at semper est vivamus. Purus nisl posuere amet, pharetra elementum suspendisse dictumst adipiscing sed. Facilisis vivamus eu mi, consectetur a senectus vitae turpis leo. Quam euismod velit quam dictum.</p>
                </div>
            </div>

        </div>
    )
}