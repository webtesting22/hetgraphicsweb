import React,{useState,useEffect} from "react";
import "./HeroComponent.css"
import BackImage from "./BackGroundImage.svg"
const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        BackImage,
        'https://images.unsplash.com/photo-1529218402470-5dec8fea0761?q=80&w=1804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        // Add more image paths as needed
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <div id="HomeComponentContainer">
                <div className="BackgroundImageOverlay" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
                    {/* <img src={BackImage} alt="" /> */}
                    <div className="BlackOverlay">

                    </div>
                    <div className="WriteUpContent">
                        <div style={{ textAlign: "center" }}>
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