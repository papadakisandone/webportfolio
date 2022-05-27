import React, {useState} from 'react';
import HeaderSocials from './HeaderSocials';
import Cta from './Cta';
import mypic from "../../assets/me/antonis_transparent.png"
import {FaReact} from "react-icons/fa"
import "./header.css"

const Header = () => {
    const [isHover, setisHover] = useState(false);

    const toggle =()=>{
        setisHover(!isHover);
    }

    return (
        <header>
        
            <div className="container header__container">
            
                <h5> Hello I'm</h5>
                <h1>Papadakis Antonios</h1>
                <h5 className="text-light">Junior Developer</h5>
                <Cta/>
                <HeaderSocials />
                <div className="me">
                    {isHover && <FaReact className="header__react-icon header__react-animation"/>}                
                    <img onMouseOver={toggle} onMouseOut={toggle} src={mypic} alt="my photo" />
                </div>
                <a href='#contact' className='scroll__down'>Scroll Down</a>
                
                

            </div>



        </header>
    );
};

export default Header;