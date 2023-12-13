import { useNavigate } from 'react-router-dom';
import { setupAnimation } from '../../animation.js';
import { useEffect } from 'react';
import "../../App.css";


    
    const Navbar = () => {
        useEffect(() => {
            setupAnimation();
          }, []);
    const navigate = useNavigate();



    return(
        <>
         <header id='header_frame'>
        <a onClick={() => navigate('/')} className="brand">wer_media:</a>
        <div className="menu-btn">
            <div className="navigation">
                <div className="navigation-items">
                    <a className='colorChange'
                    onClick={() => navigate('/Test')}
                    >Home</a>
                    <a className='colorChange' href="#">Vacatures</a>
                    <a className='colorChange' href="#">Over ons</a>
                    <a className='colorChange' href="#">Contact</a>
                    <a className='afspraak' href="#">Afspraak maken</a>
                    <button className="menu-toggle" id="menuToggle">
                <svg viewBox="0 0 12 10" className="hamburger" height="40px" width="40px">
                    <path d="M10,2 L2,2" className="bar-1"></path>
                    <path d="M2,5 L10,5" className="bar-2"></path>
                    <path d="M10,8 L2,8" className="bar-3"></path>

                </svg>
            </button>

                
                    
                </div>
                
            </div>
        </div>
       
    </header>
    <section className="fullpage-menu">
        <div className="fullpage-menu-inner">
            <div className="menu-bg">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav>
                <ul className="main-menu">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Work</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>

          

        </div>
    </section>

    </>
    )}
    
    export default Navbar
    