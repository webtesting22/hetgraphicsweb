import React from "react";
import HeroSection from "../HeroComponent/HeroSection";
import About from "../AboutUs/About";
import CompanyQuate from "../CompanyQuate/CompanyQuate";
import ImageGallery from "../ImageGallery/ImageGallery";
const HomeView=()=>{
    return(
        <>
        <HeroSection/>
        <About/>
        <CompanyQuate/>
        <ImageGallery/>
        </>
    )
}

export default HomeView