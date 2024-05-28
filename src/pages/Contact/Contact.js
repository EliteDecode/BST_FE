import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import College from "../../components/Courses/Courses";
import Calender from "../../components/Calender/Calender";
import CareerProgression from "../../components/CareerProgression/CareerProgression";
import LearningProgression from "../../components/LearningProgression/LearningProgression";
import Roadmap from "../../components/Roadmap/Roadmap";
import ContactUs from "../../components/Contact/ContactUs";

const Contact = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="Contact" />
        <ContactUs />
      </div>
    </div>
  );
};

export default Contact;
