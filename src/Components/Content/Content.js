import React, { Component } from "react";
import "./Content.css";
import HeroContent from "../HeroContent/HeroContent";
import Footer from "../Footer/Footer";
import Copyright from "../Copyright/Copyright";
import About from "../About/About";
import Introduction from "../Introduction/Introduction";
import Testimonial from "../Testimonial/Testimonial";
import Projects from "../Projects/Projects";
import Contactus from "../Contactus/Contactus";
import Services from "../Services/Services";

class Content extends Component {
  render() {
    return (
      <div id="content" className="content-wrap">
        <main>
          <HeroContent />
          <div className="main-content-wrap">
            <Introduction />
            <About />
            <Services />
            <Projects />
            <Testimonial />
            <Contactus />
          </div>
          <Footer />
          <Copyright />
        </main>
      </div>
    );
  }
}
export default Content;
