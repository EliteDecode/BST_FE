import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Events from "../../components/Events/Events";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/general/Breadcrumbs";
import News from "../../components/News/News";
import { useApiGlobalContext } from "../../utils/apiContext";

const EventPage = () => {
  const { closeSubmenu } = useGlobalContext();
  const { events, loading } = useApiGlobalContext();

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="events" />
        <Breadcrumbs primaryPage="Home" secondaryPage="All Events" />
        <News items={events} loading={loading} category="events" />
        <NavFooter />
      </div>
    </div>
  );
};

export default EventPage;
