import './NavBar.css'
import { TitulosSecciones } from '../TitulosSecciones/TitulosSecciones'

import logo from '../../assets/cduLogo.png'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';



export const NavBar = () => {
    const { pathname } = useLocation()
    return (
        <>
            <nav className='nav'>
                <div className='topBar'>
                    <div className='divContentInfoTopBar'>
                        <ul className='ulInfo'>
                            <li><FiMapPin style={{ color: 'green', marginRight: 5 }} /> Ubicacion</li>
                            <li><FiMail style={{ color: 'green', marginRight: 5 }} />Contacto</li>
                            <li><FiPhone style={{ color: 'green', marginRight: 5 }} />1112345678</li>
                        </ul>
                    </div>
                    <div>
                        <img className='imgLogo' src={logo} alt="logo" />
                    </div>
                    <div>
                        <input
                            className='inputSearch'
                            type="search"
                            placeholder='search...'
                            id='inputSearch' />
                        <BiSearch
                            size={'40px'}
                            color='white'
                            style={{
                                backgroundColor: 'green',
                                borderRadius: '50%',
                                padding: '10px',
                                marginLeft: '6px',
                                marginBottom: '5px'
                            }} />
                    </div>
                </div>
                <div
                    className='downBar'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: pathname === '/' ? 'gray' : 'black',
                        height: '50px'
                    }}>
                    <ul>
                        <li><Link to="/" >inicio</Link></li>
                        <li><Link to="/nosotros" >nosotros</Link></li>
                        <li><Link to="/practicas" >practicas</Link></li>
                        <li><Link to="/tecnologias" >tecnologias</Link></li>
                        <li><Link to="/contacto" >contacto</Link></li>
                    </ul>
                </div>
            </nav>
            {pathname !== '/' && <TitulosSecciones tittle={pathname.toUpperCase().split('/')} />}
        </>
    )
}