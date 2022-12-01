import React from 'react'
import { FaHandPointRight } from "react-icons/fa";
import "./Services.css";
function Services() {
    return (
        <div className="container-card clearfix" id="Services">
            <div className="intro-tag">Services</div>
            <div className="services-left">
                <div className="about-heading">Aluminium Scaffolding</div>
                <div className="about-content">
                    <div className="about-point"> <FaHandPointRight />Single Width</div>
                    <div className="about-point"> <FaHandPointRight />Double Width</div>
                    <div className="about-point"> <FaHandPointRight />Customized Aluminum Scaffolds</div>
                    <div className="about-point"> <FaHandPointRight />Aluminium Scaffold Component</div>
                </div>
                <div className="about-heading">MS Scaffolding</div>
                <div className="about-content">
                    <div className="about-point"> <FaHandPointRight />Pipe & Coupler Scaffolding</div>
                    <div className="about-point"> <FaHandPointRight />Cuplock Scaffolding</div>
                    <div className="about-point"> <FaHandPointRight />H-Frame Scaffolding</div>
                    <div className="about-point"> <FaHandPointRight />Ringlock Scaffolding</div>
                </div>
            </div>

            <div className="services-right">
                <div className="about-heading">Aerial Work Platform</div>
                <div className="about-content">
                    <div className="about-point"> <FaHandPointRight />Boom Lifts</div>
                    <div className="about-point"> <FaHandPointRight />Personal Lifts</div>
                    <div className="about-point"> <FaHandPointRight />Scissor Lifts</div>
                    <div className="about-point"> <FaHandPointRight />Ladders</div>
                </div>
                <div className="about-heading">Others</div>
                <div className="about-content">
                    <div className="about-point"> <FaHandPointRight />Material Handling Equipment</div>
                    <div className="about-point"> <FaHandPointRight />Rope Susupended Platfrom</div>
                    <div className="about-point"> <FaHandPointRight />Construction Hoist Elevetors</div>
                    <div className="about-point"> <FaHandPointRight />Fall Protection Systems</div>
                    <div className="about-point"> <FaHandPointRight />Rentals</div>
                </div>
            </div>
        </div>
    )
}

export default Services
