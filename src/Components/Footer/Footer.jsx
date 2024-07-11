import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <section className="footer-section" style={{paddingBottom:"0px",paddingTop:"6rem"}}>
                <div className="container row m-auto w-100">
                    <div className="col-lg-6" style={{ display: "flex",alignItems:"center" }}>
                        <div className="headingContainer">
                            <h1 className="sectionheading">Get In Touch</h1>
                            <hr />
                            <div className="socialIcons">
                                <i class='bx bxl-instagram-alt' ></i>
                                <i class='bx bxl-linkedin-square'></i>
                                <i class='bx bxl-facebook-square'></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" id="Footerbtn">
                        <div style={{ position: "relative" }} >
                            <a href="https://yellow-spot.vercel.app/" target="_blank"><button className="AnimatedBtn"><i class='bx bx-envelope'></i> sales@yellowspot.in </button></a>
                            <div className="btnBackside">

                            </div>
                        </div>
                        <div style={{ position: "relative" }} >
                            <a href="https://yellow-spot.vercel.app/" target="_blank"><button className="AnimatedBtn"><i class='bx bx-phone'></i> +91 93242 44444 </button></a>
                            <div className="btnBackside">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyrightText">
                    <p>©2024. <a href="https://www.outleadsolutions.com" target="_blank" style={{color:"white"}}>Outlead Solutions</a> <i class='bx bx-right-arrow-alt' ></i></p>
                </div>
            </section>
        </>
    )
}
export default Footer;