import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import hrImg from "../../assets/hr.jpg";
import { schoolResourceContents, studentAffairsPoints } from "../../utils/data";
const StudentAffairs = () => {
  return (
    <Box
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Student Affairs" subtitle="Student Affairs" />
        <Box>
          <Grid container rowSpacing={4}>
            {studentAffairsPoints.map((Affairs, index) => (
              <Grid item sm={12} md={4} className="sm:p-5 p-0" spacing={2}>
                <Box
                  className="border shadow-md rounded-md p-4 bg-white"
                  key={index}>
                  <Box className="flex items-center space-x-2">
                    {Affairs.icon}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        color: "#0000666",
                      }}>
                      {Affairs.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle"
                    sx={{
                      marginTop: "5%",
                      opacity: 0.8,
                      fontSize: "14px",
                      "@media (max-width: 575px)": {
                        fontSize: "13px",
                      },
                    }}>
                    {Affairs.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default StudentAffairs;
