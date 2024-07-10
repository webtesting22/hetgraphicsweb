import React from "react";
import "./HeroComponent.css"
import BackImage from "./BackGroundImage.svg"
const HeroSection = () => {
    return (
        <>
            <div id="HomeComponentContainer">
                <div className="BackgroundImageOverlay">
                    {/* <img src={BackImage} alt="" /> */}
                    <div className="BlackOverlay">

                    </div>
                    <div className="WriteUpContent">
                        <div style={{textAlign:"center"}}>
                            <h1>Het graphics</h1>
                            <p>City’s <span>largest</span> media planner and advertising solution provider
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroSection;