import React from 'react'
import "./About.css";
import structure from "../../Assets/structure.png";
import { FaHandPointRight } from "react-icons/fa";
function About() {
    return (
        <div className="aboutus-wrap fullwidth" id="Aboutus">
            <div className="structure clearfix">
                <div className="structure-image">
                    <img src={structure} alt="" />
                </div>
            </div>
            <div className="container-card">
                <div className="about-tag">About Us</div>
                <div className="about-content">Mr. Ashok R. Desai, a qualified Civil Engineer and Post Graduate in Construction Management has an experience of 18 years in executing industrial projects both in India & abroad. He has worked as an employee in reputed companies like L & T, ECC Group and executed projects such as thermal power plants, IT parks, sports stadiums and housing projects for Russian Military in Russia.</div>
                <div className="about-heading">Who We Are?</div>
                <div className="about-content">Anish Scaffolding is located in Bangalore, India. The company provides complete scaffolding and formwork solutions for the various industrial, residential and infrastructure projects.</div>
                <div className="about-heading">Key Points</div>
                <div className="about-content">
                    <div className="about-point"> <FaHandPointRight />WE ARE PASSIONATE</div>
                    <div className="about-point"> <FaHandPointRight />HONEST AND DEPENDABLE</div>
                    <div className="about-point"> <FaHandPointRight />100% CLIENT SATISFACTION</div>
                    <div className="about-point"> <FaHandPointRight />AWESOME SUPPORT</div>
                </div>
            </div>
        </div>
    )
}

export default About
