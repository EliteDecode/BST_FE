import React from "react";
import { Carousel } from "antd";
import { Box, Button, Typography } from "@mui/material";
import { heroContents } from "../../utils/data";
import { Select, Space } from "antd";
import ButtonCustome from "../general/ButtonCustome";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [course, setCourse] = React.useState("");
  const navigate = useNavigate();
  const navigateToPage = () => {
    navigate(`/Diploma/courses/${course}`);
  };

  const handleChange = (value) => {
    setCourse(value);
  };
  return (
    <Carousel autoplay autoplaySpeed={3000}>
      {heroContents.map((content, index) => (
        <Box className={`${content.class}`}>
          <Box className="container">
            <Box className="sm:w-[68%] w-[100%] hero-text">
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: "",
                    fontFamily: "Raleway",
                    fontSize: "20px",
                    lineHeight: "2rem",
                    color: "#fff",
                    opacity: "0.9",
                  }}>
                  {content.subtitle}
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Raleway",
                    fontSize: "60px",
                    lineHeight: "3.9rem",
                    color: "#fff",
                  }}>
                  {content.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: "14px",
                    color: "#fff",
                    opacity: "0.9",
                    lineHeight: "1rem",
                    marginTop: 1,
                  }}>
                  {content.subtitle2}
                </Typography>
                <Box className=" sm:w-[80%] w-full mt-16 border-2 border-[#f7f7f7] rounded-lg p-3  flex items-center space-x-2">
                  <Select
                    size="large"
                    className="text-white"
                    defaultValue="select"
                    style={{
                      width: "100%",
                      fontWeight: "bold",
                      fontSize: "17px",
                      color: "#fff",
                    }}
                    dropdownStyle={{ fontSize: "17px" }}
                    onChange={handleChange}
                    bordered={false}
                    options={[
                      {
                        value: "select",
                        label: "Select Course",
                        disabled: true,
                      },
                      {
                        value: "CERTIFICATE COURSES",
                        label: "CERTIFICATE COURSES",
                      },
                      { value: "DIPLOMA COURSES", label: "DIPLOMA COURSES" },
                      {
                        value: "EXECUTIVE TRAINING",
                        label: "EXECUTIVE TRAINING",
                      },
                    ]}
                  />
                  <Button
                    size="small"
                    variant="contained"
                    disabled={course === null}
                    onClick={navigateToPage}
                    disableElevation
                    sx={{
                      bgcolor: "#c39a4b",
                      color: "#fff",
                      height: "40px",
                      fontWeight: "bold",
                      width: "100%",
                    }}>
                    Explore
                  </Button>
                </Box>
                {/* 
              <Box
                className="mt-8 space-x-4"
                data-aos="fade-down"
                data-aos-duration="800">
                <ButtonCustome
                  size="medium"
                  color="#000066"
                  text={content.btn1}
                  type="fill"
                  capitalzie={false}
                />

                <Button
                  size="medium"
                  variant="outlined"
                  disableElevation
                  sx={{
                    bgcolor: "#fff",
                    color: "#000066",
                    fontSize: "12px",
                    fontWeight: "bold",
                    border: "1px solid #fff",
                    "&:hover": {
                      bgcolor: "transparent",
                      color: "#fff",
                      border: "1px solid #fff",
                    },
                  }}>
                  {content.btn2}
                </Button>
              </Box> */}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};
export default Hero;
