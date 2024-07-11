import React from "react";
import "./Navigation.css"
import HetLogo from "./HetLogo.png"
const Navbar = () => {
    const NavigationLink = [
        {
            link: "About Us",
            path: ""
        },
        {
            link: "Gallery",
            path: ""
        }
    ]
    return (
        <>
            <section id="NavigationSection">
                <div className="first">
                    <a href="mailto:sales@yellowspot.in" style={{ color: "white" }}><span>sales@yellowspot.in</span></a>
                    <a href="tel:+91 9324244444" style={{ color: "white" }}><span>+91 9324244444</span></a>
                </div>
                <div className="HetLogo">
                    <img src={HetLogo} style={{ width: "90px" }} alt="" />
                </div>
                <div className="third">
                    {NavigationLink.map((item, index) => (
                        <>
                            <li key={index}>{item.link}</li>

                        </>
                    ))}
                    <div style={{ position: "relative" }}>
                        <a href="https://yellow-spot.vercel.app/" target="_blank"><button className="AnimatedBtn">YellowSpot</button></a>
                        <div className="btnBackside">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Navbar;