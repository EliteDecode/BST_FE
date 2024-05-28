import { Box, Typography } from "@mui/material";
import React from "react";

const Title = ({ subtitle, title }) => {
  return (
    <Box className="py-10">
      <Typography
        variant="h3"
        sx={{
          fontWeight: 600,
          padding: "4px 0px",

          color: "#000066",
          fontSize: "20px",

          color: "#000066",
          fontSize: "25px",

          marginTop: "4%",
          opacity: "0.9",

          "@media (max-width:767px)": {
            fontSize: "20px",
          },
        }}>
        {subtitle}
      </Typography>
      <Box
        sx={{
          borderBottom: "8px solid #c39a4b",
          width: "10vh",
          "@media (max-width:767px)": {
            width: "16vw",
          },
        }}></Box>
      <Typography
        sx={{
          fontSize: "35px",
          fontWeight: "Bold",
          color: "#000066",
          fontFamily: "Raleway",
          fontSize: "40px",
          fontWeight: "Bold",
          marginTop: "1%",

          "@media (max-width:767px)": {
            fontSize: "35px",
          },
        }}>
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
