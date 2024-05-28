import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Calender from "../../components/Calender/Calender";
import Breadcrumbs from "../../components/general/Breadcrumbs";

const CalenderPage = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="academic calender" />
        <Breadcrumbs primaryPage="Diploma" secondaryPage="Academic Calender" />

        <Calender />

        <NavFooter />
      </div>
    </div>
  );
};

export default CalenderPage;
