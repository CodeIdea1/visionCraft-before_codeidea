'use client';

import HeroSection from "./sections/HeroSection";
import InsuranceMadeEasy from "./sections/InsuranceMadeEasy";
import LensTypes from "./sections/LensTypes";
import Products from "./sections/Products";
import RameAdvisor from "./sections/RameAdvisor";
import SpeedyDelivery from "./sections/SpeedyDelivery";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <InsuranceMadeEasy />
      <SpeedyDelivery />
      <Products/> 
      <LensTypes/>
      <RameAdvisor />
    </div>
  );
}
  