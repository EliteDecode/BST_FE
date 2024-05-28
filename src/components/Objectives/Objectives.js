import { Box, Grid } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import objImg from "../../assets/obj.jpg";
import { Avatar, List } from "antd";
import { objectives } from "../../utils/data";

const Objectives = () => {
  return (
    <Box
      id="University Objectives"
      className="bg-[#f7f7f7] mt-0"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="About Babtech School of Technology" subtitle="About Us" />
        <Box>
          <Grid container className="mt-2">
            <Grid item sm={12} md={6}>
              <img
                src={objImg}
                alt="application"
                width="100%"
                className="rounded-l-md"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} className="border shadow-md">
              <Box className="rounded-r-md w-full">
                <Box className="rounded-md p-5  w-full ">
                  <p class="mb-6 text-sm ">
                    Babtech School of Technology (BST) is a leading institution
                    in tech education, offering comprehensive diploma programs
                    in Software Engineering, Data & AI, Product Design and
                    Management. Empowering students for successful careers
                    through academic excellence and industry-focused training.
                  </p>

                  <p class="mb-6 text-sm ">
                    Hands-On Expert Instructors Industry Placement Get hands-on
                    with tech, learn everything and anything related to your
                    course. Learn from exceptional Industry experts and be
                    mentored by seasoned professionals.
                  </p>

                  {/* <p class="mb-6 text-sm ">
                    Access top-tier organizations leveraging our partnerships,
                    recommendations, and reach and network.
                  </p> */}

                  <p class="mb-6 text-sm ">
                    Our state-of-the-art facilities provide an ideal environment
                    for learning and innovation. We're committed to staying at
                    the forefront of technological advancements.
                  </p>

                  <p class="mb-6 text-sm ">
                    At BST, we believe in the potential of every student. Our
                    mission is to prepare you for a successful career in the
                    ever-evolving tech industry.
                  </p>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Objectives;
