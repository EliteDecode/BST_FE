import React from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Title from "../general/Title";
import { courses } from "../../utils/data";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <Box
      id="Colleges and Schools"
      className=" py-10 "
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine"
    >
      <Box className="container">
        <Title title="" subtitle="Our Offerings" />

        <Box>
          <Grid container spacing={1} className="space-y-16">
            {courses.map((course, index) => (
              <Grid item sm={12} md={12} key={index} className=" p-3">
                <Grid container spacing={2}>
                  <Grid item sm={12} md={6}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <Box sx={{ maxWidth: "400px" }}>
                        <Typography
                          className="text-center"
                          variant="h5"
                          component="div"
                          sx={{
                            fontSize: "30px",
                            fontWeight: "800",
                            fontFamily: "'Neue Helvetica BQ', sans-serif",
                            marginBottom: 3,
                            marginTop: 2,
                            textAlign: 'center'
                          }}
                        >
                          {course.name}
                        </Typography>
                        {course.name.includes("EXECUTIVE") && (
                          <Typography
                          className="hand-font"
                            variant="h5"
                            component="div"
                            sx={{ fontSize: "20px", fontFamily:'Bradley Hand', fontWeight:'700', textAlign:"center"}}
                          
                          >
                            Acquire advanced skills and strategic insights
                            essential for success in today's dynamic business
                            environment, stay ahead of industry trends and
                            refine your leadership skills
                          </Typography>
                        )}
                        {course.name.includes("CERTIFICATE") && (
                          <Typography
                          className="hand1"
                            variant="h5"
                            component="div"
                            sx={{ fontSize: "20px", fontFamily:'Bradley Hand', fontWeight:'700', textAlign:"center"}}

                          >
                            Enhance your skills, gain hands-on experience,
                            access opportunities and become sought after!
                          </Typography>
                        )}
                        {course.name.includes("DIPLOMA") && (
                          <Typography
                          className="hand"
                            variant="h5"
                            component="div"
                            sx={{ fontSize: "20px", fontFamily:'Bradley Hand', fontWeight:'700', textAlign:"center"}}
                          >
                            Earn a university-affiliated diploma to enhance
                            your qualification. Our programs provide a
                            recognized certification with significant value in
                            the job market.
                          </Typography>
                        )}
                        <Box className="mt-8 flex justify-center">
                          <Link to={`/Diploma/courses/${course.name}`}>
                            <Button
                              variant="outlined"
                              disableElevation
                              size="medium"
                              sx={{
                                bgcolor: "#babae6",
                                color: "#fff",
                                size: "small",
                                border: "none",
                                fontSize: "12px",
                               
                                bgcolor: "#000066",
                                fontSize: "13px",
                                fontWeight: "bold",

                                textTransform: "capitalize",
                                fontWeight: "bold",
                                "&:hover": {
                                  bgcolor: "#d6babb",
                                  color: "#fff",
                                  border: "none",
                                },
                              }}
                            >
                              View Courses
                            </Button>
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <Card sx={{ width: "100%" }}>
                        <CardMedia
                          component="img"
                          alt="Faculties"
                          height="140"
                          image={course.imageUrl}
                          style={{ border: "none", height:'50vh'}}
                        />
                      </Card>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Courses;
