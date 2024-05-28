import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Title from "../general/Title";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import EventIcon from "@mui/icons-material/Event";
import { upcomingEvents } from "../../utils/data";
import ButtonCustome from "../general/ButtonCustome";
import { useApiGlobalContext } from "../../utils/apiContext";
import EventsLoader from "../Loader/EventsLoader";

const Calender = () => {
  const { calenderYear, loading, getCalenderByYear } = useApiGlobalContext();

  function getCurrentYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear.toString();
  }

  useEffect(() => {
    getCalenderByYear(2024);
  }, []);

  return (
    <Box
      id="Academic Calender"
      className=" py-10 bg-[#fff]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Academic Calender" subtitle="Our Calender" />
      </Box>
      <Box className="calender" sx={{ position: "relative" }}>
        <Grid container>
          <Grid item sm={12} md={6}></Grid>
          <Grid
            item
            sm={12}
            md={6}
            style={{ background: "rgba(0,0,0,0.7)" }}
            sx={{
              padding: "5% 3%",
              "@media (max-width:567px)": {
                padding: "15% 3%",
              },
            }}>
            <Typography
              variant="h1"
              sx={{ fontSize: "35px", fontWeight: "bold", color: "#fff" }}>
              Academic calender
            </Typography>
            <Box sx={{ margin: "5% 0% 0% 0%" }}>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "transparent",
                }}>
                {upcomingEvents.map((event, index) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "#c39a4b" }}>
                        <EventIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      sx={{
                        color: "#f7f7f7",
                      }}
                      secondaryTypographyProps={{ color: "#f7f7f790" }}
                      primary={event.title}
                      secondary={event.date}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box sx={{ position: "absolute", bottom: 10, right: 10 }}>
              <ButtonCustome
                size="small"
                type="fill"
                color="#c39a4b"
                text="View Calender"
                capitalzie={true}
              />
            </Box>
            <Box>
              <List>
                {loading ? (
                  <>
                    {upcomingEvents.map((event, index) => (
                      <EventsLoader />
                    ))}
                  </>
                ) : (
                  <>
                    {calenderYear?.slice(0, 8).map((event, index) => (
                      <ListItem key={index}>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#1d6400" }}>
                            <EventIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          sx={{
                            color: "#f7f7f7",
                          }}
                          secondaryTypographyProps={{
                            color: "#f7f7f790",
                            fontSize: "13px",
                          }}
                          primaryTypographyProps={{
                            fontSize: "13px",
                          }}
                          primary={event?.title}
                          secondary={new Date(event?.startDate).toLocaleString(
                            undefined,
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",

                              hour12: true,
                            }
                          )}
                        />
                      </ListItem>
                    ))}
                  </>
                )}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Calender;
