import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import img from "../../assets/prog2.jpg";
import { Progress } from "antd";
import { LearningProgressions } from "../../utils/data";

const LearningProgression = () => {
  return (
    <Box
      id="Core Values"
      className=" py-10 bg-[#fff]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title
          title="Learning Progression at BST"
          subtitle="Learning Progression"
        />

        <Grid container spacing={2}>
          <Grid item sm={12} md={7}>
            <Box>
              <Grid container spacing={2}>
                {LearningProgressions.map((item, index) => {
                  return (
                    <Grid item sm={12} md={6} key={index}>
                      <Box className="p-4 flex flex-col text-center items-center justify-center rounded-md shadow-lg bg-[#f7f7f7]">
                        <Typography
                          variant="h4"
                          sx={{
                            fontSize: "17px",
                            fontWeight: "Bold",
                            marginBottom: "5%",
                          }}>
                          {item.title}
                        </Typography>
                        <Progress
                          trailColor="#000066"
                          strokeColor="#c59b4d"
                          type="circle"
                          size={70}
                          percent={item.percent}
                        />
                        <Typography
                          variant="h5"
                          sx={{
                            color: "#333",
                            fontSize: "12px",
                            margin: "5% 0%",
                          }}>
                          <Typography
                            variant="span"
                            sx={{ fontWeight: "bold" }}>
                            Description:
                          </Typography>{" "}
                          {item.description}
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            color: "#333",
                            fontSize: "12px",
                            margin: "2% 0%",
                          }}>
                          <Typography
                            variant="span"
                            sx={{ fontWeight: "bold" }}>
                            Duration:
                          </Typography>{" "}
                          {item.duration}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            md={5}
            className="sm:flex hidden flex-col items-center justify-center">
            <img alt="progression" src={img} width="82%" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LearningProgression;
