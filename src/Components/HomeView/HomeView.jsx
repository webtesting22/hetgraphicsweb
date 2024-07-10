import React from "react";
import HeroSection from "../HeroComponent/HeroSection";
import About from "../AboutUs/About";
import CompanyQuate from "../CompanyQuate/CompanyQuate";
import Footer from "../Footer/Footer";

const HomeView=()=>{
    return(
        <>
        <HeroSection/>
        <About/>
        <CompanyQuate/>
        <Footer />
        </>
    )
}

export default HomeView