import React from "react";
import "./founder.css"
import FounderDemo from "./FounderDemo.svg"
import YellowEffect from "../../assets/Images/effect3.svg"
const Founder = () => {
    return (
        <>
            <div id="FounderContainer">
                <img src={YellowEffect} alt="" className="effectImage3" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5" style={{ display: "flex", alignItems: "center", justifyContent: "start" }}>
                            <div className="headingContainer">
                                <h1 className="sectionheading">Meet Our Founder</h1>
                                <hr />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="FounderImageAndInfo">
                                <img src={FounderDemo} alt="" />
                                <div className="FounderInfo">
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                                        <h1>Asit Shah</h1>
                                        <i class='bx bxl-linkedin-square'></i>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: "23px", color: "white", fontWeight: "500" }}>Founder & CEO </h4>
                                    </div>
                                    <p style={{ fontSize: "16px" }}>Mr. Asit Shah, leading 'Het Graphics' and co-founder of 'Yellow Spot,' has transformed Ahmedabad's OOH media landscape with innovative solutions, while his multifaceted leadership spans media, real estate, finance, and philanthropy.</p>
                                </div>

                                <div className="ImageOverlayborder">

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