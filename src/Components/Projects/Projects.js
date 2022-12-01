import React from 'react'
import './Projects.css'
import P1 from "../../Assets/Aluscaffolding.jpg";
import P2 from "../../Assets/couplers.jpg";
import P3 from "../../Assets/cupscaffolding.jpg";
import P4 from "../../Assets/Hframe.jpg";
import P5 from "../../Assets/scaff1.jpg";
import P6 from "../../Assets/scaff2.jpg";

function Projects() {
    return (
        <div className="fullwidth project-wrap" id="Projects">
            <div className="container-card">
                <div className="intro-tag">Our Projects</div>
                <div className="intro-heading">Reference Projects</div>
                <div className="intro-content">Nowadays the highest buildings and most complicated floor plans are created with PERI formwork and scaffolding technology. As a reliable partner, we are supporting our customers with innovative products and services.
Discover our projects all around the world.</div>
                <div className="projects-list-wrap fullwidth">
                    <div className="p-img-wrap">
                        <img src={P1} />
                    </div>
                    <div className="p-img-wrap">
                        <img src={P2} />
                    </div>
                    <div className="p-img-wrap">
                        <img src={P3} />
                    </div>
                    <div className="p-img-wrap">
                        <img src={P4} />
                    </div>
                    <div className="p-img-wrap">
                        <img src={P5} />
                    </div>
                    <div className="p-img-wrap">
                        <img src={P6} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
