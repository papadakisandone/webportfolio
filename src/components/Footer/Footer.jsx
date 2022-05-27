import React from 'react';
import flogo from "../../assets/ap_footer_logo.png"
import {BsLinkedin, BsGithub} from "react-icons/bs"
import "./footer.css"


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <a href='#' ><img className="footer__logo" src={flogo}/></a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://github.com/papadakisandone" target="_blank"><BsGithub/></a>
                <a href="https://www.linkedin.com/in/antonios-papadakis-633b34215/" target="_blank"><BsLinkedin/></a>
            </div>
            <div className='footer__copyright'>
                <small>&copy; Papadakis Antonios. All rights reserved {year}.</small>
            </div>
        </footer>
    );
};

export default Footer;