import { Box, Button, Typography } from "@mui/material";
import { Input } from "antd";
import React from "react";
import subscribeImg from "../../assets/subscribe.png";

const Subscribe = () => {
  return (
    <Box
      className="subscribe"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Box className="text-center flex items-center flex-col sm:w-[60%] w-full m-auto">
          <Box>
            <img
              src={subscribeImg}
              alt="subscribe "
              className="mb-10 sm:w-[70px] w-[60px]"
              className="mb-10 sm:w-[60px] w-[60px]"
            />
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: "24px",

              fontSize: "28px",

              fontWeight: "600",
              color: "#f7f7f7",
              "@media (max-width: 767px)": {
                fontSize: "20px",
              },
            }}>
            Stay Updated On the Latest Happenings In BST
          </Typography>

          <Box className="flex bg-white border mt-5 rounded-xl px-2 sm:py-1 py-0.5  w-full items-center">
            <Input
              placeholder="Subscribe to our newsletter"
              style={{
                border: "none",
                boxShadow: "none",
                background: "transparent",
                color: "#0000666",
                fontWeight: "bold",
                fontSize: "13px",
              }}
            />
            <Button
              type="submit"
              className="hover:bg-#f7f7f7 hover:text-[#000066] hover:border-[#000066]"
              sx={{
                background: "#000066",
                borderRadius: "25px",
                padding: "10px 4px",
                fontSize: "12px",
                fontWeight: "bold",
                width: "20%",
                color: "#fff",
                "@media (max-width:767px)": {
                  fontSize: "9px",
                },
              }}>
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Subscribe;
