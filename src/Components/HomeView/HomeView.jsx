import React from "react";
import HeroSection from "../HeroComponent/HeroSection";
import About from "../AboutUs/About";
import CompanyQuate from "../CompanyQuate/CompanyQuate";
import ImageGallery from "../ImageGallery/ImageGallery";
import Footer from "../Footer/Footer";
import Founder from "../Founder/Founder";
const HomeView=()=>{
    return(
        <>
        <HeroSection/>
        <About/>
        <CompanyQuate/>
        <ImageGallery/>
        <Founder/>
        <Footer/>
        </>
    )
}

export default HomeView