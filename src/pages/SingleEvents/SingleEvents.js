import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import { useApiGlobalContext } from "../../utils/apiContext";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/general/Breadcrumbs";
import SingleContent from "../../components/SingleContent/SingleContent";
import { useParams } from "react-router-dom";

const SingleEvents = () => {
  const { closeSubmenu } = useGlobalContext();
  const { events, loading, event, getSingleEvents } = useApiGlobalContext();

  const { eventId } = useParams();

  useEffect(() => {
    getSingleEvents(eventId);
  }, []);

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="events" />
        <Breadcrumbs primaryPage="Home" secondaryPage="Events" />
        <SingleContent
          item={event}
          category="Events"
          others={events}
          loading={loading}
        />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default SingleEvents;
