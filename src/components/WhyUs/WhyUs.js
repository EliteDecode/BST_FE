import {
  Box,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Title from "../general/Title";
import hrImg from "../../assets/hr.jpg";
import {
  libraryFeatures,
  schoolResourceContents,
  whyUsReasons,
} from "../../utils/data";
import { Avatar } from "antd";
const WhyUs = () => {
  return (
    <Box
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Why Choose BST" subtitle="Why Us" />
        <Box className="">
          <Grid container rowSpacing={4}>
            {/* <Grid
              item
              sm={12}
              md={5}
              className="flex items-center justify-center ">
              <img src={hrImg} className="rounded-md w-[85%]" />
            </Grid> */}
            <Grid item sm={12} md={12} className="sm:p-5 p-0">
              <Box>
                <Grid container spacing={2}>
                  {whyUsReasons.map((resource, index) => (
                    <Grid item sm={6} md={4} key={index}>
                      <Box className="p-4">
                        <Box className="flex space-x-2 items-center">
                          {resource.icon}
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: "bold",
                              fontSize: "17px",
                              color: "#0000666",
                            }}>
                            {resource.title}
                          </Typography>
                        </Box>
                        <Typography
                          variant="subtitle"
                          sx={{
                            marginTop: "3%",
                            opacity: 0.8,
                            fontSize: "16px",
                            "@media (max-width: 575px)": {
                              fontSize: "16px",
                            },
                          }}>
                          {resource.description}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyUs;
