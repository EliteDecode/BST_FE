import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import visionImg from "../../assets/vision.png";
import missionImg from "../../assets/mission.png";
import aimImg from "../../assets/aim.png";

const VisionMission = () => {
  return (
    <Box
      id="Mission and Vision"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine"
      className="mb-5">
      <Box className="container">
        <Title title="Mission & Vision" subtitle="BST" />
        <Box>
          <Grid container rowSpacing={8} columnSpacing={2}>
            <Grid item sm={12} md={4}>
              <Box className="sm:p-3 p-0 bg-[#f7f7f7] border rounded-md shadow-md mt-5">
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#000066",
                    marginBottom: 1,
                    fontSize: "23px",
                  }}>
                  Mission
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    opacity: "0.7",
                    lineHeight: "1.3rem",
                  }}>
                  <span className="text-[25px] font-bold "> To</span> lead the
                  charge in educating and disseminating knowledge in science and
                  technology and to channel that knowledge toward solving
                  society’s challenges
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} md={4}>
              <Box className="sm:p-3 p-0 bg-[#f7f7f7] border rounded-md shadow-md mt-5">
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#000066",

                    marginBottom: 1,
                    fontSize: "23px",
                  }}>
                  Vision
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    opacity: "0.7",
                    lineHeight: "1.3rem",
                  }}>
                  <span className="text-[25px] font-bold "> To</span> To be a
                  prestigious international university that champions
                  innovation, self -reliance, and the development of culturally
                  savvy and disciplined researchers and products.
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} md={4}>
              <Box className="sm:p-3 p-0 bg-[#f7f7f7] border rounded-md shadow-md mt-5">
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#000066",
                    marginBottom: 1,
                    fontSize: "23px",
                  }}>
                  Our Values
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    opacity: "0.7",
                    lineHeight: "1.3rem",
                  }}>
                  <span className="text-[25px] font-bold "> We</span> hold
                  relationship, quality , integrity , innovation and culture at
                  the very core of our business within and with our clients
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default VisionMission;
