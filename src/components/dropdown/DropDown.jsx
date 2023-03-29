import './dropDown.css';
import {FaAngleDown} from 'react-icons/fa';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const DropDown = ({openToggler, setOpenToggler}) => {

    //const [isActive, setIsActive] = useState(false);
   
   return(
        <div className='dropdowun'>
            <div className= 'dropdowun-inicio' onClick={(e)=>setOpenToggler(!openToggler)}>Inicio <i><FaAngleDown/></i></div>
            {openToggler && (
                <div className='dropdown-content' >
                     <Link  activeClass="active" to="humano" spy={true} smooth={true} offset={50} duration={500} >
                    <div className='dropdown-item'>Reino Humano</div>
                    </Link>
                    <Link  activeClass="active" to="animal" spy={true} smooth={true} offset={50} duration={500} >
                    <div className='dropdown-item'>Reino Animal</div>
                    </Link>
                    <Link  activeClass="active" to="vegetal" spy={true} smooth={true} offset={50} duration={500} >
                    <div className='dropdown-item'>Reino Vegetal</div>
                    </Link>
                    <Link  activeClass="active" to="minerales" spy={true} smooth={true} offset={50} duration={500} >
                    <div className='dropdown-item'>Minerales</div>
                    </Link>
                    <Link  activeClass="active" to="oceano" spy={true} smooth={true} offset={50} duration={500} >
                    <div className='dropdown-item'>Oceanos</div>
                    </Link>
               </div>
            )}
            
        </div>
    )
}

export default DropDown; 