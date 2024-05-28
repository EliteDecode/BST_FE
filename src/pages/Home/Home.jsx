import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import News from "../../components/News/News";
import Events from "../../components/Events/Events";
import { useGlobalContext } from "../../utils/context";
import CoreValues from "../../components/CoreValues/CoreValues";
import Applications from "../../components/Application/Application";
import Gallery from "../../components/Gallery/Gallery";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import Hero2 from "../../components/Hero/Hero2";
import Objectives from "../../components/Objectives/Objectives";
import WhyUs from "../../components/WhyUs/WhyUs";
import College from "../../components/Courses/Courses";
import CareerProgression from "../../components/CareerProgression/CareerProgression";
import LearningProgression from "../../components/LearningProgression/LearningProgression";
import Partner from "../../components/Partner/Partner";
import Roadmap from "../../components/Roadmap/Roadmap";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <Hero />

        <College />
        <WhyUs />

        <Events />

        <News />
        <Applications />
        <Gallery />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default Home;
