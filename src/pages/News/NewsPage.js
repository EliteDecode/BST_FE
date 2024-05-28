import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import News from "../../components/News/News";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/general/Breadcrumbs";
import { useApiGlobalContext } from "../../utils/apiContext";

const NewsPage = () => {
  const { closeSubmenu } = useGlobalContext();
  const { news, loading } = useApiGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="news" />
        <Breadcrumbs primaryPage="Home" secondaryPage="All News" />
        <News items={news} loading={loading} category="news" />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default NewsPage;
