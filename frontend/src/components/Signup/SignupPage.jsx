import React from "react";
import HeroSection from "./HeroSection";
import InvestmentOptions from "./InvestmentOptions";
import Benefits from "./Benifits";
import Faq from "./Faq";
import OpenAccount from "../Common/OpenAccount/OpenAccount";

function SignupPage() {
  return (
    <>
      <HeroSection />
      <InvestmentOptions/>
      <Benefits/>
      <Faq/>
      <OpenAccount/>
    </>
  );
}

export default SignupPage;
