import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Academics from "./pages/Academics/Academics";
import About from "./pages/About/About";
import SingleDepartment from "./pages/SingleDepartment/SingleDepartment";
import NewsPage from "./pages/News/NewsPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import EventPage from "./pages/EventPage/EventPage";
import Courses from "./pages/Courses/Courses";
import CalenderPage from "./pages/CalenderPage/CalenderPage";
import SingleCourse from "./pages/SingleCourse/SingleCourse";
import Admission from "./pages/Admission/Admission";
import SingleNews from "./pages/SingleNews/SingleNews";
import SingleEvents from "./pages/SingleEvents/SingleEvents";
import Tech4She from "./pages/Tech4She/Tech4She";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/gallery" element={<GalleryPage />} />
        <Route path="/home/news" element={<NewsPage />} />
        <Route path="/home/news/:newsId" element={<SingleNews />} />
        <Route path="/home/events" element={<EventPage />} />
        <Route path="/home/events/:eventId" element={<SingleEvents />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/diploma" element={<Academics />} />
        <Route path="/diploma/courses" element={<Courses />} />
        <Route path="/tech4she" element={<Tech4She />} />
        <Route path="/diploma/calender" element={<CalenderPage />} />
        <Route path="/diploma/courses/:course" element={<SingleCourse />} />
        <Route
          path="/Diploma/courses/course/departments/:department"
          element={<SingleDepartment />}
        />
        <Route path="/admission" element={<Admission />} />
      </Routes>
    </Router>
  );
};

export default App;
