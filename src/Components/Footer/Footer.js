import React, { Component } from "react";
import "./Footer.css";
import bg_img from "../../Assets/banner1.png";
import { FaMapMarkedAlt } from 'react-icons/fa';
import { AiTwotoneMail, AiFillPhone } from 'react-icons/ai'
import { IoTimeSharp } from 'react-icons/io5'
class Footer extends Component {
  render() {
    return (
      <section className="footer-wrap" id="contact">
        <div className="footer-content">
          <div className="footer-img-wrap">
            <img src={bg_img} />
          </div>
          <div className="footer-content-wrap">
            <div className="fullwidth">
              <div className="content clearfix">
                <i><FaMapMarkedAlt /></i>
                <div>Unit 27 Nxa, Surya Nagar, Ahilya Devi Holkar Mg, Powai Road, Vikhroli (West), Mumbai 400 083</div>
              </div>
              <div className="content clearfix">
                <i><AiFillPhone /></i>
                <div>
                  <a href="tel:+91 9819426637">9819426637</a>
                  <a href="tel:+91 7039226637">7039226637</a>
                </div>
              </div>
              <div className="content clearfix">
                <i><AiTwotoneMail /></i>
                <div>
                  <a
                    className="email-link"
                    href="mailto:aqs.entp@gmail.com"
                    target="_blank"
                  >aqs.entp@gmail.com</a>
                </div>
              </div>
              <div className="content clearfix">
                <i><IoTimeSharp /></i>
                <div>Mon.-Fri.: 10-20, Sun.: 12-16</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
