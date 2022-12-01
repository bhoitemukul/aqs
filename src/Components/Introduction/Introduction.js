import React from 'react'
import "./Introduction.css";
import Safety from "../../Assets/shield.svg";
import Quality from "../../Assets/quality.svg";
import Protection from "../../Assets/fall.svg";
import Rental from "../../Assets/rent.svg";

function Introduction() {
    return (
        <div className="fullwidth introduction-wrap" id="Overview">
            <div className="container-card">
                <div className="intro-tag">Introduction</div>
                <div className="intro-heading">AQS ENTERPRISES</div>
                <div className="intro-content"> AQS is a supplier of scaffolding items on Rental and Hire basis, also work as a Painting contractor, Interior Decorator and JCB for hire bases.</div>
            </div>
            <div className="container-card sub-container-card clearfix">
                <div className="clearfix fullwidth card-image-heading-wrap">
                    <div className="card-image-wrap clearfix ">
                        <div className="card-image">
                            <img src={Safety} alt="" />
                        </div>
                    </div>
                    <div className="intro-heading ">Safety</div>
                </div>
                <div className="intro-content">Our renowned brand ensure safety as a prime objective. All works are carried out in accordance with Safety Norms.</div>
            </div>
            <div className="container-card sub-container-card sub-container-card1 clearfix">
                <div className="clearfix fullwidth card-image-heading-wrap">
                    <div className="card-image-wrap clearfix ">
                        <div className="card-image">
                            <img src={Quality} alt="" />
                        </div>
                    </div>
                    <div className="intro-heading ">High Quality</div>
                </div>
                <div className="intro-content">All materials are sourced with strict quality standards applied to ensure reliability, durability and safety. </div>
            </div>
            <div className="container-card sub-container-card  clearfix">
                <div className="clearfix fullwidth card-image-heading-wrap">
                    <div className="card-image-wrap clearfix ">
                        <div className="card-image">
                            <img src={Protection} alt="" />
                        </div>
                    </div>
                    <div className="intro-heading ">Fall Protection</div>
                </div>
                <div className="intro-content">We offer various types fall protection systems such as a horizontal, overhead, vertical and aluminium lifeline system</div>
            </div>
            <div className="container-card sub-container-card sub-container-card1 clearfix">
                <div className="clearfix fullwidth card-image-heading-wrap">
                    <div className="card-image-wrap clearfix ">
                        <div className="card-image">
                            <img src={Rental} alt="" />
                        </div>
                    </div>
                    <div className="intro-heading ">Rental Basis</div>
                </div>
                <div className="intro-content">All the machines & equipments readily available in our stock and as per order it can be deputed on any site Pan India.</div>
            </div>
        </div>
    )
}

export default Introduction
