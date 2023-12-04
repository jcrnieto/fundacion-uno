// import './dropDown.css';
// import { NavLink, useNavigate  } from 'react-router-dom';

// const DropDown = ({ menuOpen, setMenuOpen, openToggler, setOpenToggler }) => {
    
//     const navigate = useNavigate();

//     const handleScroll = (event, targetId) => {
//         event.preventDefault();
//         const targetElement = document.getElementById(targetId);
//         if (targetElement) {
//           targetElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
//           setMenuOpen(false);
//         }

//         if (targetId) {
//             navigate('/');
//           }
//       };
//     return (
//         <div className='dropdowun' >
//             <div className='dropdowun-inicio' onClick={(e) => setOpenToggler(!openToggler)}>Inicio</div>

//             {openToggler && (
//                 <ul className='dropdown-content' >
                   
//                            <li className='dropdown-item'>
//                                <a 
//                                  href="#humano"  
//                                  onClick={(e) => { handleScroll(e, 'humano');setMenuOpen(!menuOpen)}}
//                                  className='link'
//                                 > Reino Humano </a>
//                             </li>
                       
//                             <li className='dropdown-item'>
//                                 <a
//                                   href="#animal"
//                                   onClick={(e) => { handleScroll(e, 'animal');setMenuOpen(!menuOpen)}}
//                                   className='link'
//                                 > Reino Animal </a>
//                             </li>
                        
//                             <li className='dropdown-item'>
//                                 <a
//                                   href="#animal"
//                                   onClick={(e) => { handleScroll(e, 'vegetal');setMenuOpen(!menuOpen)}}
//                                   className='link'
//                                 > Reino Vegetal </a>
//                             </li>
                   
//                             <li className='dropdown-item'>
//                                 <a
//                                   href="#minerales"
//                                   onClick={(e) => { handleScroll(e, 'minerales');setMenuOpen(!menuOpen)}}
//                                   className='link'
//                                 > Minerales </a>
//                             </li>
                     
//                             <li className='dropdown-item'>
//                                 <a
//                                   href="#oceano"
//                                   onClick={(e) => { handleScroll(e, 'oceano');setMenuOpen(!menuOpen)}}
//                                   className='link'
//                                 > Océanos </a>
//                             </li>
                   
//               </ul>
//             )}

//         </div>
//     )
// }

// export default DropDown; 