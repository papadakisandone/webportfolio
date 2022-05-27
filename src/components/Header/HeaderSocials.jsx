import React from 'react';
import {BsLinkedin, BsGithub} from "react-icons/bs"
import logo from "../../assets/ap_logo.png"

const HeaderSocials = () => {
    return (<>
        
        <div className='header__socials'>
            <img className="logo" src={logo}/>
            <div className='header__social_line'></div>
            <a href='https://github.com/papadakisandone' target="_blank"><BsGithub/></a>
            <a href='https://www.linkedin.com/in/antonios-papadakis-633b34215/' target="_blank"><BsLinkedin/></a>
        </div>
    </>
        
    );
};

export default HeaderSocials;