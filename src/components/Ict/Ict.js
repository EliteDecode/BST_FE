import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";

const Ict = ({ events }) => {
  return (
    <Box
      className=" py-10 "
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="ICT" subtitle="Our ICT Department" />
      </Box>
      <Box className="ict" sx={{ position: "relative" }}>
        <Grid container>
          <Grid
            item
            sm={12}
            md={6}
            style={{ background: "rgba(0,0,0,0.7)" }}
            sx={{
              padding: "5% 6%",
              "@media (max-width:567px)": {
                padding: "15% 3%",
              },
            }}>
            <Box className="container" sx={{ margin: "5% 0% 0% 0%" }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "16px",
                  color: "#fff",
                  lineHeight: "1.6rem",
                  color: "#f7f7f7",
                }}>
                <Typography
                  variant="span"
                  sx={{
                    color: "#c39a4b",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}>
                  The ICT{" "}
                </Typography>{" "}
                department at Babtech School of Technology is at the forefront
                of cutting-edge technology and innovation. <br />
                <br /> Our dedicated team of IT professionals and educators is
                committed to fostering a dynamic learning environment where
                students can explore the limitless potential of information
                technology. With state-of-the-art labs, advanced software, and a
                robust network infrastructure, our ICT department equips
                students with the skills and knowledge needed to excel in the
                ever-evolving world of technology. <br /> Whether it's
                programming, cybersecurity, data analytics, or network
                administration, we offer a comprehensive range of programs and
                resources to prepare our students for success in the digital
                age.
                <br />
                <br />
                At Hillside University, we believe that technology is not just a
                tool but a catalyst for change and progress. Our ICT department
                plays a pivotal role in research and development, contributing
                to innovative solutions that address real-world challenges.
                Beyond the classroom, our students have opportunities to engage
                in internships and collaborative projects with industry
                partners, ensuring they gain practical experience and a
                competitive edge in the job market.
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={6}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Ict;
