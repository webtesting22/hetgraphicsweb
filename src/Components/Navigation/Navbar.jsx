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
                    <span>sales@yellowspot.in</span>
                    <span>+91 9324244444</span>
                </div>
                <div className="HetLogo">
                    <img src={HetLogo} style={{width:"120px"}} alt="" />
                </div>
                <div className="third">
                    {NavigationLink.map((item, index) => (
                        <>
                            <li key={index}>{item.link}</li>

                        </>
                    ))}
                    <div style={{position:"relative"}}>
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