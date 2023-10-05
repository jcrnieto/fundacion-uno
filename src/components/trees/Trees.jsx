import './trees.css';
import img1 from '../../image/img-arbolitos1.jpg';
import img2 from '../../image/img-arbolitos2.jpg';
import img3 from '../../image/img-arbolitos3.jpg';
import img4 from '../../image/img-arbolitos4.jpg';
import { BsWhatsapp } from 'react-icons/bs';

const Trees = () => {
    return (
        <div className="container-trees-buys">
            <h1 className='title-trees-buys'>Colaborá con la compra de arbolitos</h1>
            <div className='container-image-trees'>
                <img src={img1} alt="arbolito" className='img-trees' />
                <img src={img2} alt="arbolito" className='img-trees' />
                <img src={img3} alt="arbolito" className='img-trees' />
                <img src={img4} alt="arbolito" className='img-trees' />
            </div>
            <p className='text-trees-buys'>RECIBIMOS COLABORACIÓN DE CAMPAÑAS DE VENTAS  DE ÁRBOLES FRUTALES CÍTRICOS.
                Un grupo de voluntarios realizan campañas de ventas de árboles frutales cítricos
                para generar conciencia sobre lo importante que es plantar con el fin de que aquellos
                arbolitos brinden alimentos, además de todo el bien y beneficio que aportan los árboles.
                Estos frutales son plantas productivas, injertadas y certificadas.
                Compartimos el contacto de Julieta para que a través de la adquisición de estos arbolitos,
                no sólo ayudas y colaboras con a la Fundación sino que también lo estás haciendo con este
                amado Planeta Azul. ¡Gracias!
            </p>
            <div className='container-button-whatsapp'>
                <a href="https://wa.me/+5493512452786" target="_blank" rel="noreferrer" className='link-contact'>
                    <button className='button-whatsapp'>
                        <i className='icon-whatsapp'><BsWhatsapp /></i>
                        <p className='text-whatsapp'>Whatsapp</p>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Trees