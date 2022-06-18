import './NavBar.css'

import logo from '../../assets/cduLogo.png'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';



export const NavBar = () => {
    return (
        <>


            <div style={{ display: 'flex', flexDirection: 'column' }}>

                <Navbar bg="light" expand="lg" >
                    <Container fluid className='btnBurg'>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" style={{ justifyContent: 'space-evenly' }}>
                            <Nav
                                className="my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <div className='divContentInfoTopBar'>
                                    <ul className='ulInfo'>
                                        <li><a className='link-navv' href='/contacto'><FiMapPin style={{ color: 'green', marginRight: 5 }} /> Ubicacion</a></li>
                                        <li><a className='link-navv' href='/Contacto'><FiMail style={{ color: 'green', marginRight: 5 }} />Contacto</a></li>
                                        <li><FiPhone style={{ color: 'green', marginRight: 5 }} />1112345678</li>
                                    </ul>
                                </div>
                            </Nav>
                            <Navbar.Brand href='/'>
                                <img className='imgLogo' src={logo} alt="logo" />
                            </Navbar.Brand>
                            <Form className="d-flex" style={{ justifyContent: 'center' }}>
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
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div
                    className='downBar'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'gray',
                        height: 'fit-content',
                        minHeight: '50px',
                        transition: '200ms ease-in-out'
                    }}>
                    <ul style={{ flexWrap: 'wrap' }}>
                        <li><Link to="/" >Inicio</Link></li>
                        <li><Link to="/nosotros" >Nosotros</Link></li>
                        <li><Link to="/practicas" >Prácticas</Link></li>
                        <li><Link to="/tecnologias" >Tecnologías</Link></li>
                        <li><Link to="/contacto" >Contacto</Link></li>
                    </ul>
                </div>

            </div>
        </>
    )
}