import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import img1 from "../../assets/graduate.png";
import img2 from "../../assets/nongraduate.png";
const Roadmap = () => {
  return (
    <Box
      id="Core Values"
      className=" py-10 bg-[#fff]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Learning Roadmaps" subtitle="Roadmaps" />

        <Grid container>
          <Grid
            item
            sm={12}
            md={6}
            className="p-4  bg-gradient-to-b from-white to-[#ebeced]">
            <Typography
              sx={{ fontSize: "26px", fontWeight: "bold", marginBottom: 8 }}>
              Non Gradautes
            </Typography>
            <Box className="flex justify-center items-center">
              <img src={img2} alt="Roadmaps" />
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            className="p-4  bg-gradient-to-b from-white to-[#ebeced]">
            <Typography
              sx={{ fontSize: "26px", fontWeight: "bold", marginBottom: 8 }}>
              Gradautes
            </Typography>
            <Box className="flex justify-center items-center">
              <img src={img1} alt="Roadmaps" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Roadmap;
