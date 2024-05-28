import { Box, Grid, Typography } from "@mui/material";
import React from "react";
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
import { Link } from "react-router-dom";

const Events = () => {
  const { events, loading } = useApiGlobalContext();
  return (
    <Box
      id="Events"
      className=" py-10 "
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="News" subtitle="All News" />
      </Box>
      <Box className="events" sx={{ position: "relative" }}>
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
              sx={{ fontSize: "30px", fontWeight: "bold", color: "#fff" }}>
              News
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
                      secondaryTypographyProps={{
                        color: "#f7f7f790",
                        fontSize: "13px",
                      }}
                      primaryTypographyProps={{
                        fontSize: "13px",
                      }}
                      primary={event.title}
                      secondary={event.date}
                    />
                  </ListItem>
                ))}

                {loading ? (
                  <>
                    {upcomingEvents.map((event, index) => (
                      <EventsLoader />
                    ))}
                  </>
                ) : (
                  <>
                    {events?.slice(0, 6).map((event, index) => (
                      <Link to={`events/${event?.id}`}>
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
                            secondary={new Date(
                              event?.eventsDate
                            ).toLocaleString(undefined, {
                              year: "numeric",
                              month: "long",
                              day: "numeric",

                              hour12: true,
                            })}
                          />
                        </ListItem>
                      </Link>
                    ))}
                  </>
                )}
              </List>
            </Box>
            {events && (
              <Box sx={{ position: "absolute", bottom: 10, right: 10 }}>
                <ButtonCustome
                  size="small"
                  type="fill"
                  color="#c39a4b"
                  text="See All Events"
                  capitalzie={true}
                />
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Events;
