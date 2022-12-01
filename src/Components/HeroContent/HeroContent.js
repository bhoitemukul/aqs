import React, { Component } from "react";
import "./HeroContent.css";
import { defaultStyle, transitionStyles, timeOut } from "../../transition";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Bg_vdo from "../../Assets/bg_vdo.mp4";

class HeroContent extends Component {
  constructor() {
    super();
    this.state = {
      clientWidth: window.screen.width,
      clientHeight: window.screen.height,
    };
  }

  updateDimensions() {
    this.setState({
      clientWidth: window.screen.width,
      clientHeight: window.screen.height,
    });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    return (
      <CSSTransition in={true} timeout={timeOut} appear unmountOnExit>
        {(state) => (
          <div className="hero-wrap" id="Home">
            <video className="videoTag" autoPlay loop muted>
              <source src={Bg_vdo} type="video/mp4" />
            </video>
            <section
              className="hero-content-wrap"
              id="home"
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <div className="fadeup-enter-done fullwidth">
                <h1>
                  BUILD WITH AQS ENTERPRISES
                </h1>
                <div className="big-heading">“Service is our number one priority, it’s in our name.”
							</div>
              </div>
              <div className="fadeup-enter-done">
                <p className="heading-desc">
                  The Service Scaffold estimating team aims to provide the most cost effective and innovative access solutions across Mumbai.
                </p>
              </div>
            </section>
          </div>
        )}
      </CSSTransition>
    );
  }
}
export default HeroContent;
