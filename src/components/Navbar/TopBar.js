import { Box, Button } from "@mui/material";
import React from "react";
import { TopLinks } from "../../utils/data";
import { LocationOn, MailTwoTone, PhoneCallback } from "@mui/icons-material";
import { Typography } from "antd";

const TopBar = () => {
  return (
    <Box className="p-1 custom-bg-red">
      <Box className="container">
        <Box className=" flex flex-wrap items-center justify-between   ">
          <Box className="flex items-center sm:justify-around justify-between sm:w-auto  w-full space-x-4 sm:mb-0 mb-2">
            <Box>
              <Button
                size="small"
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: "#f7f7f780",

                  color: "#0000666",

                  color: "#000066",

                  fontSize: "10px",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "#000066",
                    color: "#fff",
                  },
                }}>
                Follow Us
              </Button>
            </Box>
            <Box className="flex space-x-2 items-center">
              {TopLinks.map((icon, index) => (
                <Box key={index}>{icon}</Box>
              ))}
            </Box>
          </Box>
          <Box className="sm:flex hidden flex-wrap items-center sm:space-x-4 space-x-1 ">
            <Box className="flex items-center sm:mr-0 mr-4 ">
              <LocationOn sx={{ color: "#f7f7f790", fontSize: "12px" }} />

              <Typography
                variant="subtitle2"
                style={{
                  color: "#f7f7f7",
                  fontSize: "9px",
                  fontWeight: "bold",
                }}>
                Ajah, Lagos , Nigeria
              </Typography>
            </Box>
            <Box className="flex items-center">
              <MailTwoTone sx={{ color: "#f7f7f790", fontSize: "12px" }} />

              <Typography
                variant="subtitle2"
                style={{
                  color: "#f7f7f7",
                  fontSize: "9px",
                  fontWeight: "bold",
                }}>
                enquiries@bst.edu.ng
              </Typography>
            </Box>
            <Box className="flex items-center sm:mt-0 mt-1 ">
              <PhoneCallback sx={{ color: "#f7f7f790", fontSize: "12px" }} />

              <Typography
                variant="subtitle2"
                style={{
                  color: "#f7f7f7",
                  fontSize: "9px",
                  fontWeight: "bold",
                }}>
                +234-(901)-070-7383
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopBar;
