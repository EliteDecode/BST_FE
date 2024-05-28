import { Box } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import img from "../../assets/caeer.png";

const CareerProgression = () => {
  return (
    <Box
      id="Core Values"
      className=" py-10 bg-[#ebeced]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Career Progression at BST" subtitle="Career Path" />

        <Box className="flex flex-col items-center justify-center">
          <img src={img} />
        </Box>
      </Box>
    </Box>
  );
};

export default CareerProgression;
