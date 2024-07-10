import React from "react";

import { MailOutlined, PhoneOutlined, InstagramOutlined, LinkedinOutlined, FacebookOutlined } from "@ant-design/icons"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-about-section">
                <div className="headingContainer">
                    <h1 className="section-heading">Get In Touch</h1>
                    <hr />
                </div>
                <div className="footer-icon-section">
                    <InstagramOutlined className="footer-icon" />
                    <LinkedinOutlined className="footer-icon" />
                    <FacebookOutlined className="footer-icon" />
                </div>
            </div>
            <div className="footer-buttons">
                <button className="footer-button">
                    <MailOutlined className="footer-icon" />
                    sales@yellowspot.in
                </button>
                <div className="footer-button-backside"> </div>

                <button className="footer-button" >
                    <PhoneOutlined className="footer-icon" />
                    +91 93242 44444
                </button>
                <div className="footer-button-backside"> </div>


            </div>
        </div>
    )
}
export default Footer;