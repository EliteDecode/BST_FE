import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import img from "../../assets/partner.png";
const Partner = () => {
  return (
    <Box
      id="Core Values"
      className=" py-10 bg-[#ebeced]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Affilliation and Patnerships" subtitle="Our Patners" />

        <Box className="flex justify-center items-center">
          <img src={img} alt="partners" />
        </Box>
      </Box>
    </Box>
  );
};

export default Partner;
