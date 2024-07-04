import React from "react";
import Title from "../general/Title";
import { Box, Typography } from "@mui/material";
import { Button } from "antd";
import { Link } from "react-router-dom";

const DataScience = () => {
  const dataScienceTopics = [
    {
      index: "01",
      title: "Fundamentals of Data Science",
      description:
        "Gain a solid foundation in data analysis, statistics, and probability to understand and interpret data effectively.",
    },
    {
      index: "02",
      title: "Programming Skills",
      description:
        "Master programming languages such as Python and R, essential for data manipulation, analysis, and visualization.",
    },
    {
      index: "03",
      title: "Data Visualization",
      description:
        "Develop skills to create compelling data visualizations using tools like Matplotlib, Seaborn, and Tableau to communicate insights effectively.",
    },
    {
      index: "04",
      title: "Data Wrangling",
      description:
        "Acquire techniques for cleaning, transforming, and enriching data to prepare it for analysis.",
    },
    {
      index: "05",
      title: "Statistical Modeling",
      description:
        "Learn to build and evaluate statistical models to make data-driven decisions.",
    },
    {
      index: "06",
      title: "Machine Learning Algorithms",
      description:
        "Learn various machine learning techniques, including supervised and unsupervised learning, to build predictive models.",
    },
    {
      index: "07",
      title: "Big Data Technologies",
      description:
        "Explore big data frameworks like Hadoop and Spark to handle and process large datasets efficiently.",
    },
    {
      index: "08",
      title: "AI and Deep Learning",
      description:
        "Dive into advanced topics like neural networks, natural language processing, and computer vision using frameworks like TensorFlow and PyTorch.",
    },
    {
      index: "09",
      title: "Ethics and Data Privacy",
      description:
        "Understand the ethical considerations and best practices for data privacy and security in data science and AI.",
    },
    {
      index: "10",
      title: "Real-World Applications",
      description:
        "Work on practical projects and case studies to apply your knowledge to real-world scenarios.",
    },
  ];

  return (
    <div>
      <Typography
        className="text-[16px] font-semibold"
        sx={{ fontSize: "16px", fontFamily: "Raleway", lineHeight: "1.8rem" }}>
        Step into the future of Data Science & AI and empower your career with
        the skills that drive tomorrow's innovations. Our intensive 1-year
        Advance Diploma course in Data Science & AI is your launchpad to a
        thrilling career. <br />
        <br /> Master the tools that drive the future: Python, ML, TensorFlow,
        and more. Analyze complex data, build intelligent systems, and develop
        AI solutions that address real-world challenges. We don't just teach
        data skills - we ignite your analytical thinking, curiosity, and
        collaborative spirit, the qualities top employers seek.
        <br />
        <br />
        Unfortunately we can not serve everyone, spots are limited. Don't miss
        your chance to become a data science leader. Enroll today!
      </Typography>
      <Typography
        className="text-[16px] font-black "
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: 3,
          fontFamily: "Raleway",
          lineHeight: "1.8rem",
        }}>
        <span className="text-red-600">(*)</span> Low budget accommodation is
        also available.
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "Bold",
          color: "#000066",
          fontFamily: "Raleway",

          fontWeight: "Bold",
          marginTop: "1%",

          "@media (max-width:767px)": {
            fontSize: "25px",
          },
        }}>
        What You'll Learn
      </Typography>
      <p>
        You'll learn how to extract valuable insights from data, build
        intelligent systems, and create solutions that address real-world
        challenges. <br />
        Here's a breakdown of the key areas you'll explore:
      </p>
      <Box className="grid mt-5 sm:grid-cols-3 grid-cols-1 gap-4">
        {dataScienceTopics?.map((item, index) => (
          <Box key={index} className="border p-3 rounded-md shadow-md bg-white">
            <Box className="flex items-center space-x-2">
              <Typography
                sx={{ fontWeight: "bold", color: "#c39a4b", fontSize: "30px" }}>
                {item?.index}.
              </Typography>
              <Typography sx={{ fontFamily: "Calistoga" }}>
                {item.title}
              </Typography>
            </Box>
            <Typography
              sx={{
                marginTop: 1,
                fontSize: "14px",
                opacity: "0.9",
                fontFamily: "Raleway",
              }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
      <Link to="/admission">
        <Button className="mt-5 text-white bg-[#000066]">
          Click Here to Apply Now
        </Button>
      </Link>
    </div>
  );
};

export default DataScience;
