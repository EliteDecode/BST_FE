import React from "react";
import Title from "../general/Title";
import { Box, Typography } from "@mui/material";
import { Button } from "antd";
import { Link } from "react-router-dom";

const SoftwareEng = () => {
  const whatYouLearnSoftware = [
    {
      index: 1,
      title: "Coding Foundations",
      description:
        "Master core programming languages (e.g., Python, Javascript), algorithms and data structures.",
    },
    {
      index: 2,
      title: "Software Development Best Practices",
      description: "Learn to craft clean, maintainable, and efficient code.",
    },
    {
      index: 3,
      title: "Full-Stack Development",
      description:
        "Build complete applications, gaining expertise in both front-end and back-end technologies.",
    },
    {
      index: 4,
      title: "Problem-Solving Prowess",
      description:
        "Sharpen your critical thinking and problem-solving skills to tackle complex software challenges.",
    },
    {
      index: 5,
      title: "Project Management Proficiency",
      description:
        "Get hands-on experience with agile development practices, including Scrum and Kanban, to efficiently manage projects and teams.",
    },
    {
      index: 6,
      title: "Career Launchpad",
      description:
        "Acquire soft skills and knowledge employers seek, preparing you to confidently enter the software engineering job market.",
    },
    {
      index: 7,
      title: "Global Application Deployment",
      description:
        "Take your applications global! Learn to deploy software on industry-leading cloud platforms like AWS or Azure, mastering scalability, automation, and real-world deployment strategies.",
    },
  ];

  return (
    <div>
      <Typography
        className="text-[16px] font-semibold"
        sx={{ fontSize: "16px", fontFamily: "Raleway", lineHeight: "1.8rem" }}>
        Software Engineering Africa is the tech frontier, and you hold the code
        to unlock its potential. This intensive 1-year Software Engineering
        course is your launchpad to a thrilling career. <br />
        <br /> Master the languages that power the future: Python, Java, and
        more. Craft secure, innovative software that solves real-world problems.{" "}
        <br />
        <br /> We don't just teach code - we ignite your problem-solving skills,
        curiosity, and team spirit, the qualities top employers seek. Spots are
        limited. Don't miss your chance to become a tech leader. Enroll today!
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
      <p>Here's a breakdown of the key areas you'll conquer:</p>
      <Box className="grid mt-5 sm:grid-cols-3 grid-cols-1 gap-4">
        {whatYouLearnSoftware?.map((item, index) => (
          <Box key={index} className="border p-3 rounded-md shadow-md bg-white">
            <Box className="flex items-center space-x-2">
              <Typography
                sx={{ fontWeight: "bold", color: "#c39a4b", fontSize: "30px" }}>
                0{index + 1}.
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

export default SoftwareEng;
