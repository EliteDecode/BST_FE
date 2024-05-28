import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const API_URL = `http://localhost:5000/bst/api/v1`;

const AppContext = React.createContext();

const ApiProvider = ({ children }) => {
  const [news, setNews] = useState(null);
  const [singleNews, setSingleNews] = useState(null);
  const [events, setEvents] = useState(null);
  const [event, setEvent] = useState(null);
  const [calender, setCalender] = useState(null);
  const [singleCalender, setSingleCalender] = useState(null);
  const [calenderYear, setCalenderYear] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);

  const [subLoading, setSubLoading] = useState(false);

  const addSubscribers = async (email) => {
    setSubLoading(true);
    try {
      const data = await axios.post(`${API_URL}/subscribers`, email);

      if (data) {
        toast.success("You've successfully subscribed to our newsletter", {
          onClose: () => {
            setSubLoading(false);
          },
        });
        return data;
      }
    } catch (error) {
      setSubLoading(false);
      toast.error(error.response.data.error);
      toast.error(error.message);
      toast.error(error.response.data?.message);
    }
  };

  const sendMessage = async (info, formik) => {
    setLoading(true);
    try {
      const data = await axios.post(`${API_URL}/application/sendMessage`, info);

      if (data) {
        toast.success("Application submitted successfully", {
          onClose: () => {
            setLoading(false);
            formik.resetForm();
          },
        });
        return data;
      }
    } catch (error) {
      toast.error(error.response.data.error);
      toast.error(error.message);
      toast.error(error.response.data?.message);
      setLoading(false);
    }
  };

  const getNews = async () => {
    setLoading(true);
    try {
      const data = await axios.get(`${API_URL}/news/published-news`);
      setNews(data?.data);
      setLoading(false);
      console.log(data);

      return data;
    } catch (error) {
      setLoading(true);
      console.log(error);
      // toast.error(error?.response?.data?.error);
      // toast.error(error?.message);
      // toast.error(error?.response?.data?.message);

      setLoading(false);
      console.log(error);
      toast.error(error?.response?.data?.error);
      toast.error(error?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  const getSingleNews = async (id) => {
    setLoading(true);
    try {
      const data = await axios.get(`${API_URL}/news/${id}`);
      setSingleNews(data.data[0]);
      setLoading(false);

      return data;
    } catch (error) {
      setLoading(true);
      // toast.error(error.response.data.error);
      // toast.error(error.response.data?.message);

      setLoading(false);
      toast.error(error.response.data.error);
      toast.error(error.response.data?.message);
    }
  };

  const getEvents = async () => {
    setLoading(true);
    try {
      const data = await axios.get(`${API_URL}/events/published-events`);
      setEvents(data?.data);
      setLoading(false);

      return data;
    } catch (error) {
      setLoading(true);
      console.log(error);
      // toast.error(error?.response?.data?.error);
      // toast.error(error?.message);
      // toast.error(error?.response?.data?.message);

      setLoading(false);
      console.log(error);
      toast.error(error?.response?.data?.error);
      toast.error(error?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  const getGallery = async () => {
    setLoading(true);
    try {
      const data = await axios.get(`${API_URL}/gallery/published-gallery`);
      setGallery(data?.data);
      setLoading(false);
      console.log(data);

      return data;
    } catch (error) {
      setLoading(true);
      console.log(error);
      // toast.error(error?.response?.data?.error);
      // toast.error(error?.message);
      // toast.error(error?.response?.data?.message);

      setLoading(false);
      console.log(error);
      toast.error(error?.response?.data?.error);
      toast.error(error?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  const getSingleEvents = async (id) => {
    setLoading(true);
    try {
      const data = await axios.get(`${API_URL}/events/${id}`);
      setEvent(data.data[0]);
      setLoading(false);

      return data;
    } catch (error) {
      setLoading(true);
      // toast.error(error.response.data.error);
      // toast.error(error.response.data?.message);

      setLoading(false);
      toast.error(error.response.data.error);
      toast.error(error.response.data?.message);
    }
  };

  const getAllCalender = async () => {
    setLoading(true);
    try {
      const data = await axios.get(
        `${API_URL}/academic-calender/published-academic-calender`
      );
      setCalender(data?.data);
      setLoading(false);

      return data;
    } catch (error) {
      setLoading(true);
      console.log(error);
      // toast.error(error?.response?.data?.error);
      // toast.error(error?.message);
      // toast.error(error?.response?.data?.message);

      setLoading(false);
      console.log(error);
      toast.error(error?.response?.data?.error);
      toast.error(error?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  const getCalenderByYear = async (year) => {
    setLoading(true);
    try {
      const data = await axios.get(
        `${API_URL}/academic-calender/published-academic-calender/${year}`
      );
      setCalenderYear(data?.data);
      setLoading(false);

      return data;
    } catch (error) {
      setLoading(true);
      console.log(error);
      // toast.error(error?.response?.data?.error);
      // toast.error(error?.message);
      // toast.error(error?.response?.data?.message);

      setLoading(false);
      console.log(error);
      toast.error(error?.response?.data?.error);
      toast.error(error?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  const getSingleCalender = async (id) => {
    setLoading(true);
    try {
      const data = await axios.get(`${API_URL}/academic-calender/${id}`);
      setSingleCalender(data.data[0]);
      setLoading(false);

      return data;
    } catch (error) {
      setLoading(true);
      // toast.error(error.response.data.error);
      // toast.error(error.response.data?.message);

      setLoading(false);
      toast.error(error.response.data.error);
      toast.error(error.response.data?.message);
    }
  };

  // useEffect(() => {
  //   getNews();
  //   getEvents();
  //   getAllCalender();

  //   getGallery();
  // }, []);

  return (
    <AppContext.Provider
      value={{
        calender,
        calenderYear,
        singleCalender,
        getCalenderByYear,
        getSingleCalender,
        news,
        loading,
        singleNews,
        events,
        event,
        gallery,
        getSingleEvents,
        getSingleNews,

        addSubscribers,
        subLoading,
        sendMessage,
      }}>
      {children}
      <ToastContainer />
    </AppContext.Provider>
  );
};

export const useApiGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, ApiProvider };
