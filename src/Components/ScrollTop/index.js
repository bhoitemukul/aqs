import React, { Component } from "react";
import "./index.css";
import { defaultStyle, transitionStyles, timeOut } from "../../transition";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BiArrowToTop } from "react-icons/bi";

class ScrollTop extends Component {
  render() {
    return (
      <CSSTransition in={true} timeout={timeOut} appear unmountOnExit>
        {(state) => (
          <div
            onClick={() => window.scrollTo(0, 0)}
            orientation="left"
            className="social-link-wrap"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <i ><BiArrowToTop /></i>
          </div>
        )}
      </CSSTransition>
    );
  }
}
export default ScrollTop;
