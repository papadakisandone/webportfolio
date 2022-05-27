import React from 'react';
import imgAbout from "../../assets/me/ant.jpg";
import {GiNetworkBars} from "react-icons/gi";
import {FaFolderOpen} from "react-icons/fa";
import {BsCodeSlash} from "react-icons/bs";
import "./about.css"

const About = () => {
    return (
        <section id="about">
            <h5 className="">Get To Know</h5>
            <h2 className="">About</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className='about__me-image'>
                        <img src={imgAbout} alt="my photo" />
                    </div>
                    
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <GiNetworkBars className='about__icon'/>
                            <h5>Experience</h5>
                            <small >less than year</small>
                        </article>
                        <article className='about__card'>
                            <BsCodeSlash className='about__icon'/>
                            <h5>Web Developer Programmer</h5>
                            <small >MERN-Python</small>
                        </article>
                        <article className='about__card'>
                            <FaFolderOpen className='about__icon'/>
                            <h5>Projects</h5>
                            <small >15+ completed</small>
                        </article>
                    </div>
                    <p>
                        Hi, my name is Antonios Papadakis. A Web Developer - Programmer  passionate about creating interactive
                        applications and experiences on web. My base is in beautiful Hamburg, seens i moved here in the last months.
                        This is a portfolio of my personal work. 
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a> 
                </div>
            </div> 
            
        </section>
    );
};

export default About;