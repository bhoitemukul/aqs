import React from 'react'
import "./Testimonial.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Profile from "../../Assets/profile.jpeg";

function Testimonial() {
    return (
        <div className="testimonial-wrap fullwidth">
            <div className="container-card">
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                >
                    <div>
                        <img src={Profile} />
                        <div className="myCarousel">
                            <h3>D Rajaram</h3>
                            <h4>Trunow Technologies</h4>
                            <p>Thank you very much for your speedy delivery and support. My personal thanks to the delivery personals for their humble and kindness.</p>
                        </div>
                    </div>

                    <div>
                        <img src={Profile} />
                        <div className="myCarousel">
                            <h3>D Rajaram</h3>
                            <h4>Trunow Technologies</h4>
                            <p>Aluminium Mobile Scaffold (With Aluminium Platform) D10 supplied by Schach Engineers Pvt Ltd and training provided by Mr. Jitesh Singh is good.</p>
                        </div>
                    </div>

                    <div>
                        <img src={Profile} />
                        <div className="myCarousel">
                            <h3>D Rajaram</h3>
                            <h4>Trunow Technologies</h4>
                            <p>We have been regularly dealing with SCHACH since past few months now and have found their product and service to be timely and wonderful. They have a great professional attitude while dealing with their clients and simple, easy end to end processes.</p>
                        </div>
                    </div>
                </Carousel>

            </div>
        </div>
    )
}

export default Testimonial
