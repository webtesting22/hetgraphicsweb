import React from "react";
import "./founder.css"
import FounderDemo from "./founder.svg"
import YellowEffect from "../../assets/Images/effect3.svg"
const Founder = () => {
    return (
        <>
            <div id="FounderContainer">
                <img src={YellowEffect} alt="" className="effectImage3" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" style={{ display: "flex", alignItems: "center", justifyContent: "start" }}>
                            <div className="headingContainer">
                                <h1 className="sectionheading">Meet Our Founder</h1>
                                <hr />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="FounderImageAndInfo">
                                <div id="ImageHover">
                                    <img src={FounderDemo} alt="" />
                                    <div className="FounderInfo">
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                                            <h1>Asit Shah</h1>
                                            <i class='bx bxl-linkedin-square' style={{color:"white"}}></i>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: "23px", color: "white", fontWeight: "500" }}>Founder & CEO </h4>
                                        </div>
                                        <p style={{ fontSize: "16px" }}>Mr. Asit Shah, leading 'Het Graphics' and co-founder of 'Yellow Spot,' has transformed Ahmedabad's OOH media landscape with innovative solutions, while his multifaceted leadership spans media, real estate, finance, and philanthropy.</p>
                                        <br /> <p style={{ fontSize: "16px" }}>Mr. Shah works at the forefront alongside the municipal corporation and fellow OOH vendors for the betterment of the OOH industry in Ahmedabad.
                                            He is renowned within the industry and among clients as a trusted guide on campaign strategizing, media selection, campaign design, all aimed at maximizing ROI and boosting brand recognition. </p>
                                        <div style={{ position: "relative", width: "30%", marginTop: "10px" }}>
                                            <a href="https://yellow-spot.vercel.app/" target="_blank"><button className="AnimatedBtn">YellowSpot <i class='bx bx-right-arrow-alt'></i></button></a>
                                            <div className="btnBackside">

                                            </div>
                                        </div>
                                    </div>

                                    <div className="ImageOverlayborder">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Founder