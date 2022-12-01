import React, { useState } from 'react'
import { } from "./Contactus.css";
import { FaMapMarkedAlt } from 'react-icons/fa';
import { AiTwotoneMail, AiFillPhone } from 'react-icons/ai';
import { IoTimeSharp } from 'react-icons/io5';
import axios from 'axios';

function Contactus() {
    const [queryData, setqueryData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const submitQuery = (e) => {
        console.log(queryData)
        e.preventDefault();
        e.stopPropagation();
        let emailBody = `<div>
    <h6 style="font-size: 17px;margin-bottom: 26px;">There is new Query</h6>
    <div>From : ${queryData.name} , ${queryData.phone}, ${queryData.email} </>
    <div>Query : ${queryData.message}} </>
    </div>`;
        let emailObj = {
            mailTo: 'aqsenterprize@gmail.com',
            title: "AQS New Query",
            content: emailBody
        }
        console.log(emailObj);
        setqueryData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        // axios.post(`https://us-central1-theekkaralo-5008e.cloudfunctions.net/sendEmail`, { emailObj })
        //     .then(res => {
        // console.log(res);
        // console.log(res.data);
        // setqueryData({
        //     name: '',
        //     email: '',
        //     phone: '',
        //     message: ''
        // });
        //     })
    }

    return (
        <div className="contactus-wrap fullwidth" id="Contactus">
            <div className="container-card clearfix">
                <div className="c-heading">Contact Us</div>
                <div className="c-subheading">Send Us A Message</div>
                <form className="form-wrap" onSubmit={(e) => submitQuery(e)}>
                    <div className="input-wrap">
                        <input value={queryData.name} onChange={(e) => setqueryData({ ...queryData, name: e.target.value })} placeholder="Name" required />
                    </div>
                    <div className="input-wrap">
                        <input value={queryData.phone} onChange={(e) => setqueryData({ ...queryData, phone: e.target.value })} placeholder="Phone" type="tel" minLength="10" maxLength="10" required />
                    </div>
                    <div className="input-wrap">
                        <input value={queryData.email} onChange={(e) => setqueryData({ ...queryData, email: e.target.value })} placeholder="Email" type="email" />
                    </div>
                    <div className="input-wrap">
                        <textarea type="textarea" value={queryData.message} onChange={(e) => setqueryData({ ...queryData, message: e.target.value })} placeholder="Message" required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <div className="address-wrap">
                    <div className="type clearfix">
                        <div className="type-icon">
                            <i><FaMapMarkedAlt /></i>
                        </div>
                        <div className="type-content">
                            <div className="type-head">Address</div>
                            <div className="type-desc">
                                <a href="https://www.google.co.in/maps/search/Unit+27+Nxa,+Surya+Nagar,+Ahilya+Devi+Holkar+Mg/@19.1175564,72.9232855,17z/data=!3m1!4b1" target="_blank">
                                    Unit 27 Nxa, Surya Nagar, Ahilya Devi Holkar Mg, Powai Road, Vikhroli (West), Mumbai 400 083
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="type clearfix">
                        <div className="type-icon">
                            <i><AiFillPhone /></i>
                        </div>
                        <div className="type-content">
                            <div className="type-head">Phone</div>
                            <div className="type-desc">
                                <div>
                                    <a href="tel:+91 9819426637">+91 9819426637</a>
                                    <a href="tel:+91 7039226637">  ,   +91 7039226637</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="type clearfix">
                        <div className="type-icon">
                            <i><AiTwotoneMail /></i>
                        </div>
                        <div className="type-content">
                            <div className="type-head">Email</div>
                            <div className="type-desc">
                                <a
                                    className="email-link"
                                    href="mailto:aqs.entp@gmail.com"
                                    target="_blank"
                                >aqs.entp@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="type clearfix">
                        <div className="type-icon">
                            <i><IoTimeSharp /></i>
                        </div>
                        <div className="type-content">
                            <div className="type-head">Timing</div>
                            <div className="type-desc">Mon.-Fri.: 10-20, Sun.: 12-16</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus
