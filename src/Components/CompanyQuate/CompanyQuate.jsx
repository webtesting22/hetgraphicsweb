import React from "react";
import "./CompanyQuate.css"
import YellowEffect from "../../assets/Images/effect2.svg"
const CompanyQuate = () => {
    return (
        <>
            <div id="CompanyQuate">
                <img src={YellowEffect} alt=""  className="effectImage2"/>
                <div className="row container m-auto">
                    <div className="col-lg-9" style={{ display: "flex", alignItems: "center" }}>
                        <p className="CompanyPara">Find out more about our subsidiary company
                            and book your first inventory now!</p>

                    </div>
                    <div className="col-lg-3" id="RightSideBtn">
                        <div style={{ position: "relative" }}>
                            <a href="https://yellow-spot.vercel.app/" target="_blank"><button className="AnimatedBtn">YellowSpot <i class='bx bx-right-arrow-alt'></i></button></a>
                            <div className="btnBackside">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CompanyQuate