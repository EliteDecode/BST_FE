import React from "react";
import { Carousel } from "antd";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Select, Space } from "antd";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import area from "../../utils/Areas.json";
import { useNavigate, useNavigation } from "react-router-dom";

const Hero2 = () => {
  const [course, setCourse] = React.useState("");
  const navigateToPage = () => {
    navigate(`/Diploma/courses/${course}`);
  };

  const handleChange = (value) => {
    setCourse(value);
  };
  const navigate = useNavigate();

  return (
    <Box className="bg-[#fff] hero2">
      <Box className=" container ">
        <Grid container className=" py-8">
          <Grid item xs={12} sm={12} md={6}>
            <Box className="mt-10">
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Raleway",
                  fontSize: "50px",
                  lineHeight: "3.3rem",
                }}>
                Babtech School of Technology
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "14px",
                  fontFamily: "Sen",
                  color: "#333",
                  opacity: "0.9",
                  lineHeight: "1.5rem",
                  marginTop: 1,
                }}>
                Shaping the future of technology education in Africa. Empowering
                students with world-class computer education and cutting-edge
                tech skills.
              </Typography>
              <Box className=" w-full mt-16 border-2 border-[#c39a4b] rounded-lg p-3  flex items-center space-x-2">
                <Select
                  size="large"
                  defaultValue="select"
                  style={{
                    width: "100%",
                    fontWeight: "bold",
                    fontSize: "17px",
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
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className="mt-5">
            <div className="">
              <ComposableMap>
                <Geographies geography={area}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography key={geo.rsmKey} geography={geo} />
                    ))
                  }
                </Geographies>
              </ComposableMap>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Hero2;
