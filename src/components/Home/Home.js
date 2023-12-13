import { useEffect } from 'react';
import { setupAnimation } from '../../animation.js';
import '../../App.css';
import logo from '../../images/LOGO.png'
import logo2 from '../../images/weeee2.jpg'
import logo3 from '../../images/weeee5.jpg'
import logo4 from '../../images/weeee4.jpg'




const Home = () => {
    useEffect(() => {
        setupAnimation();
      }, []);



    return(        
        <>

<div class="animation">
    <h1 class="animate">loading<span>loading</span>loading<span>loading</span></h1>
    <h1 class="animate">loading<span>loading</span>loading<span>loading</span></h1>
    <h1 class="animate">loading<span>loading</span>loading<span>loading</span></h1>
    <h1 class="animate">loading<span>loading</span>loading<span>loading</span></h1>
    <h1 class="animate">loading<span>loading</span>loading<span>loading</span></h1>
    <h1 class="animate">loading<span>loading</span>loading<span>loading</span></h1>
   </div>

         <section className="home">
        <img decoding="async" className="img-slide active" alt='nee' src={logo} ></img>
        <img decoding="async" className="img-slide" alt='wow' src={logo2} style={{backgroundColor: "var( --wermedia__primary__soft__color)"}} ></img>
        <img decoding="async" className="img-slide" alt='wow' src={logo3} style={{backgroundColor: "var( --wermedia__primary__soft__color)"}} ></img>
        <img decoding="async" className="img-slide" alt='wow' src={logo4} style={{backgroundColor: "var( --wermedia__primary__soft__color)"}} ></img>
        <div className="content active">
            <h1><div class="keyboard">
      <span class="key">W</span>
      <span class="key">E</span>
      <span class="key">L</span>
      <span class="key">K</span>
      <span class="key">O</span>
      <span class="key">M</span>
      <span>_</span>
      <span class="key">B</span>
      <span class="key">I</span>
      <span class="key">J</span>
      .
    </div><br/><h1 className='wermedia' id='myText'>XOXOXOXOXO</h1></h1>
            
            
          <a href="#">Read More</a>
        </div>
        <div className="content">
          <h1>Lorum Ipsumds<br/></h1>
          
          <a href="#">Read More</a>
        </div>
        <div className="content">
          <h1>Lorum Ipsum<br/></h1>
        
          <a href="#">Read More</a>
        </div>
        <div className="content">
          <h1>Lorum Ipsum<br/></h1>
        
          <a href="#">Read More</a>
        </div>
        
       
        <div className="slider-navigation">
            <div className="nav-btn active"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
          
        </div>
    </section>

    




        <div className="intro">


        <div>
        <svg className='progress' viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.89998 6C9.43671 8.28224 7.41896 10  5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z " fill="#D9D9D9"/>
                <mask id="mask0_0_1" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="900" height="10">
                <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9"/>
                
                </mask>
                <g mask="url(#mask0_0_1)">
                <rect class="mask" y="-49" height="99" fill="#E8314F"/>
                </g>
                </svg>

            <h1 className='undergoing'>Ik ga hier nog aan werken voor een timeline in te krijgen, maar ik kijk nu nog naar wat ik echt wil hier</h1>
            
            <div className='project-title-wrapper outlined'>
                <h2 className='project-title text'>wer_media:</h2>
            </div>
            </div>
        </div>
        <section></section>
        </>
    )
    }
  

    export default Home