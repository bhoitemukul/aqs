import React, { Component } from "react";
import "./Copyright.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiTwotoneMail,
  AiFillPhone,
} from "react-icons/ai";

class Copyright extends Component {
  render() {
    return (
      <footer className="copyright-wrap" id="copyright">
        <div className="copyright-wrap-link">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/dnyaneshwar-garudkar"
                target="_blank"
                aria-label="Facebook"
              >
                <i>
                  <AiFillFacebook />
                </i>
              </a>
            </li>
            <li>
              <a
                className="email-link"
                href="mailto:aqs.entp@gmail.com"
                target="_blank"
              >
                {" "}
                <i>
                  <AiTwotoneMail />
                </i>
              </a>
            </li>
            <li>
              <a href="tel:+91 9819426637">
                <i>
                  <AiFillPhone />
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/danny_4884_"
                target="_blank"
                aria-label="Instagram"
              >
                <i>
                  <AiFillInstagram />
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright-wrap-credit">
          {/* © 2020 AQS All Rights Reserved. */}
          <a href="https://garudkar.in" target="_blank">
            <div>© 2020 Designed & developed by Mac</div>
          </a>
        </div>
      </footer>
    );
  }
}
export default Copyright;
