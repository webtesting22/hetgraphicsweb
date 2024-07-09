import React from "react";
import "./Navigation.css"
const Navbar = () => {
    const NavigationLink = [
        {
            link: "About Us",
            path: ""
        },
        {
            link: "fasfs",
            path: ""
        }
    ]
    return (
        <>
            <section id="NavigationSection">
                <div>
                    <span>sales@yellowspot.in</span>
                    <span>+91 9324244444</span>
                </div>
                <div>
                    {NavigationLink.map((item, index) => (
                        <>
                            <li key={index}>{item.link}</li>

                        </>
                    ))}
                    <div style={{position:"relative"}}>
                        <button className="AnimatedBtn">YellowSpot</button>
                        <div className="btnBackside">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Navbar;