import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Gallery from "../../components/Gallery/Gallery";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/general/Breadcrumbs";

const GalleryPage = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="gallery" />
        <Breadcrumbs primaryPage="Home" secondaryPage="Our Gallery" />
        <Gallery />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default GalleryPage;
