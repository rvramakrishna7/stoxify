import React from 'react';
import Assurance from "./Assurance"
import HeroSection from "./HeroSection";
import Education from "./Education";
import OpenAccount from "../Common/OpenAccount/OpenAccount";
import Pricing from "../Common/Pricing/Pricing";



function HomePage() {
    return ( 
        <>
        
        <HeroSection/>
        <Assurance/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        
        </>
     );
}

export default HomePage;