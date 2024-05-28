import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import CoreValues from "../../components/CoreValues/CoreValues";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import VisionMission from "../../components/VisionMission/VisionMission";
import Objectives from "../../components/Objectives/Objectives";
import Partner from "../../components/Partner/Partner";
import ContactUs from "../../components/Contact/ContactUs";

const About = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="about" />
        <CoreValues />
        {/* <VisionMission /> */}
        <Objectives />
        <Partner />
        
        <ContactUs />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default About;
