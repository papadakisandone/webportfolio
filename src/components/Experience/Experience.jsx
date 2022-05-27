import React from 'react';
import {FaHtml5, FaCss3, FaReact, FaNodeJs, FaPython} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io";
import {BsBootstrap} from "react-icons/bs";
import {SiFirebase, SiMongodb, SiExpress} from "react-icons/si";
import "./experience.css"


const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills i Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <FaHtml5 className='experience__details-icon'/>
                            <div>    
                                <h4>HTML</h4>
                                <small className='text-light'>intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                        <FaCss3 className="experience__details-icon"/>
                        <div>
                            <h4>CSS</h4>
                            <small className='text-light'>intermediate</small>
                        </div>  
                        </article>

                        <article className="experience__details">
                        <IoLogoJavascript className="experience__details-icon"/>
                        <div>
                            <h4>Javascript</h4>
                            <small className='text-light'>intermediate</small>
                        </div>
                        </article>

                        <article className="experience__details">
                            <BsBootstrap className="experience__details-icon"/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaReact className="experience__details-icon experience__animation-react"/>
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>intermediate</small>
                            </div>
                            
                        </article>
                    </div>
                </div>

                <div className="experience__backend">
                <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <FaNodeJs className="experience__details-icon"/>
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <SiExpress className="experience__details-icon"/>
                            <div>
                                <h4>Express</h4>
                                <small className='text-light'>intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <SiMongodb className="experience__details-icon"/>
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <SiFirebase className="experience__details-icon"/>
                            <div>
                                <h4>Firebase</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <FaPython className="experience__details-icon"/>
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;