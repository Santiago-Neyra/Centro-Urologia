import './Carrousel.css'
import { Button, Carousel } from 'react-bootstrap'
import { Conocenos } from '../Conocenos/Conocenos'
import { Mision } from '../Mision/Mision'
import { Link } from 'react-router-dom'

export const Carrousel = ({ data }) => {
    return (
        <div>
            <Carousel style={{ position: 'relative' }}>
                {data && data.map(({ img, info, title, redirect }) => (
                    <Carousel.Item interval={5000} key={title}>
                        <img
                            className="d-block w-100"
                            src={img}
                            alt="First slide"
                        />
                        <Carousel.Caption style={{
                            position: 'absolute',
                            top: '50%',
                            left: '10%',
                            transform: 'translate(10%, -45%)',
                            width: 'fit-content',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'flex-start'
                        }}>
                            <h1 className='titCarousel' style={{
                                fontSize: '4rem',
                                fontWeight: 'bold',
                                marginBottom: '2rem'
                            }}>{title}</h1>

                            <p className='infoCarousel' style={{
                                fontWeight: 400,
                                fontSize: '20px',
                                marginBottom: '2rem'
                            }}>{info}</p>

                            <Link to={redirect && `/${redirect}`}><Button style={{
                                padding: '.7rem 1rem',
                                fontSize: '1.2rem',
                                backgroundColor: '#45833a',
                                border: 'none',
                                width: '180px'
                            }}>{title === 'Bienvenidos' ? 'Cononcenos' : '+ informacion'}</Button></Link>

                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel >
            <Conocenos />
            <Mision />
        </div>
    )
}
