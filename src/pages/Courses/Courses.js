import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Breadcrumbs from "../../components/general/Breadcrumbs";
import Courses from "../../components/Courses/Courses";
const MainCourses = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="colleges and schools" />
        <Breadcrumbs primaryPage="Diploma" secondaryPage="Colleges" />
        <Courses />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default MainCourses;
