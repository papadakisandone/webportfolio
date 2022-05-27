import React from 'react';
import projectsdb  from '../../data/projectsdb';

import "./portfolio.css";

const Portfolio = () => {
    return (
        
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                 projectsdb.map((project) => {
                     return (
                        <article key={project.id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={project.image} alt="project photo"/>
                            </div>
                            <h3>{project.title}</h3>
                            <h5>{project.description}</h5>
                            <div className="portfolio__item-cta">    
                                <a href={project.github} target="_blank" className='btn'>Github</a>
                                <a href={project.demo} target="_blank" className={project.title!=="More Projects"?"btn btn-primary":"disable-btn"}>Live Demo</a>
                            </div>
                        </article>
                     )
                    
                })
                }
            </div>
        </section>
    );
};

export default Portfolio;