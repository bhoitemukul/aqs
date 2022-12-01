import React, { Component } from "react";
import "./index.css";
import { defaultStyle, transitionStyles, timeOut } from "../../transition";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AnchorLink from "react-anchor-link-smooth-scroll";

var prevScrollpos = window.pageYOffset;
class Header extends Component {
  constructor() {
    super();
    this.state = {
      mobileNavActive: false,
    };
    this.navClick = this.navClick.bind(this);
    this.onNavLinkClick = this.onNavLinkClick.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("click", (e) => this.handleOutsideClick(e));
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleOutsideClick(e) {
    if (
      e.target.className != "ham-box" &&
      e.target.className != "ham-box-inner" &&
      e.target.className != "mobile-nav-btn" &&
      e.target.className != "mobile-nav-active-btn"
    ) {
      this.setState({ mobileNavActive: false }, () => {
        document.body.classList.remove("blur");
      });
    }
  }

  handleScroll(event) {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }

  onNavLinkClick(event) {
    event.stopPropagation();
    event.preventDefault();
    setTimeout(() => {
      document.getElementById("header").style.top = "0";
    }, 1000);
  }
  navClick(status) {
    this.setState({ mobileNavActive: status }, () => {
      status && document.body.classList.add("blur");
      !status && document.body.classList.remove("blur");
    });
  }
  render() {
    return (
      <CSSTransition in={true} timeout={timeOut} appear unmountOnExit>
        {(state) => (
          <header
            id="header"
            className="navigation-ourter-wrap"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <div className="inner-wrap">
              <div className="logo">
                <div className="">
                  <AnchorLink
                    onClick={(event) => {
                      this.onNavLinkClick(event);
                    }}
                    className="logo-name"
                    href="#home"
                  >
                    <div className="logo-word-wrap">
                      <span>A</span>
                      <span>Q</span>
                      <span>S</span>
                      {/* AQS */}
                    </div>
                  </AnchorLink>
                </div>
              </div>
              <div className="nav-item-wrap">
                <ul>
                  <li className="fadedown-enter-done">
                    <AnchorLink
                      onClick={(event) => {
                        this.onNavLinkClick(event);
                      }}
                      className="nav-item"
                      href="#Home"
                    >
                      Home
                    </AnchorLink>
                  </li>
                  <li className="fadedown-enter-done">
                    <AnchorLink
                      onClick={(event) => {
                        this.onNavLinkClick(event);
                      }}
                      className="nav-item"
                      href="#Overview"
                    >
                      Overview
                    </AnchorLink>
                  </li>
                  <li className="fadedown-enter-done">
                    <AnchorLink
                      onClick={(event) => {
                        this.onNavLinkClick(event);
                      }}
                      className="nav-item"
                      href="#Aboutus"
                    >
                      About Us
                    </AnchorLink>
                  </li>
                  <li className="fadedown-enter-done">
                    <AnchorLink
                      onClick={(event) => {
                        this.onNavLinkClick(event);
                      }}
                      className="nav-item"
                      href="#Services"
                    >
                      Services
                    </AnchorLink>
                  </li>
                  <li className="fadedown-enter-done">
                    <AnchorLink
                      onClick={(event) => {
                        this.onNavLinkClick(event);
                      }}
                      className="nav-item"
                      href="#Projects"
                    >
                      Projects
                    </AnchorLink>
                  </li>
                  <li className="fadedown-enter-done">
                    <AnchorLink
                      onClick={(event) => {
                        this.onNavLinkClick(event);
                      }}
                      className="nav-item"
                      href="#Contactus"
                    >
                      Contact Us
                    </AnchorLink>
                  </li>
                </ul>
                {/* <div className="fadedown-enter-done">
                  <a
                    // href={Pdf}
                    target="_blank"
                    className="nav-item resume-button"
                  >
                    Resume
                  </a>
                </div> */}
              </div>

              <div className="mobile-nav-wrap fade-enter-done">
                <div>
                  <button
                    className={
                      this.state.mobileNavActive
                        ? "mobile-nav-btn"
                        : "mobile-nav-active-btn"
                    }
                    onClick={() =>
                      this.navClick(this.state.mobileNavActive ? false : true)
                    }
                  >
                    <div className="ham-box">
                      <div className="ham-box-inner"></div>
                    </div>
                  </button>
                  <aside
                    aria-hidden={this.state.mobileNavActive}
                    className={
                      this.state.mobileNavActive
                        ? "nav-item-wrap-mobile-active"
                        : "nav-item-wrap-mobile"
                    }
                  >
                    <nav>
                      <ul>
                        <li className="fadedown-enter-done">
                          <AnchorLink
                            onClick={(event) => {
                              this.onNavLinkClick(event);
                            }}
                            className="nav-item"
                            href="#Home"
                          >
                            Home
                          </AnchorLink>
                        </li>
                        <li className="fadedown-enter-done">
                          <AnchorLink
                            onClick={(event) => {
                              this.onNavLinkClick(event);
                            }}
                            className="nav-item"
                            href="#Overview"
                          >
                            Overview
                          </AnchorLink>
                        </li>
                        <li className="fadedown-enter-done">
                          <AnchorLink
                            onClick={(event) => {
                              this.onNavLinkClick(event);
                            }}
                            className="nav-item"
                            href="#Aboutus"
                          >
                            About Us
                          </AnchorLink>
                        </li>
                        <li className="fadedown-enter-done">
                          <AnchorLink
                            onClick={(event) => {
                              this.onNavLinkClick(event);
                            }}
                            className="nav-item"
                            href="#Services"
                          >
                            Services
                          </AnchorLink>
                        </li>
                        <li className="fadedown-enter-done">
                          <AnchorLink
                            onClick={(event) => {
                              this.onNavLinkClick(event);
                            }}
                            className="nav-item"
                            href="#Projects"
                          >
                            Projects
                          </AnchorLink>
                        </li>
                        <li className="fadedown-enter-done">
                          <AnchorLink
                            onClick={(event) => {
                              this.onNavLinkClick(event);
                            }}
                            className="nav-item"
                            href="#Contactus"
                          >
                            Contact Us
                          </AnchorLink>
                        </li>
                      </ul>
                      {/* <a
                        // href={Pdf}
                        className="nav-item resume-link"
                        target="_blank"
                      >
                        Resume
                      </a> */}
                    </nav>
                  </aside>
                </div>
              </div>
            </div>
          </header>
        )}
      </CSSTransition>
    );
  }
}
export default Header;
