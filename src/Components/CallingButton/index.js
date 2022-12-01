import React, { Component, useState } from "react";
import "./index.css";
import { defaultStyle, transitionStyles, timeOut } from "../../transition";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BiPhoneCall } from "react-icons/bi";
function CallingButton() {
  const [expandedDirectCall, setExpandedDirectCall] = useState(false);

  const onButtonClick = () => {
    setExpandedDirectCall(!expandedDirectCall);
    if (!expandedDirectCall) {
      setTimeout(() => {
        setExpandedDirectCall(false);
      }, 3000);
    }
  }
  return (
    <CSSTransition in={true} timeout={timeOut} appear unmountOnExit>
      {(state) => (
        <div
          orientation="right"
          className=" email-link-wrap"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <a href="tel:+91 9819426637" className={expandedDirectCall ? 'calling-wrap expandedDirectCall' : 'calling-wrap'} onClick={() => onButtonClick()}>
            <div className="img-wrap clearfix">
              <div className="img-content">
                <i><BiPhoneCall /></i>
              </div>
              <div className="expanded-calling-wrap">
                <div className="text">Call for query</div>
                <div className="text">+919819426637</div>
              </div>
            </div>
          </a>
        </div>
      )}
    </CSSTransition>
  )
}
export default CallingButton;
