import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Title from "../general/Title";
import logo from "../../assets/logoblue.png";
import { newsArray, upcomingEvents } from "../../utils/data";
import { Avatar, Card } from "antd";
import NewsLoader from "../Loader/NewsLoader";
import EventsLoader from "../Loader/EventsLoader";
import { Link } from "react-router-dom";

const { Meta } = Card;
const SingleContent = ({ item, category, others, loading }) => {
  useEffect(() => {
    console.log(item);
  }, []);
  return (
    <Box
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title={item?.title} subtitle={category} />

        <Box>
          <Grid container spacing={6}>
            {/* Left Column: Main News */}
            <Grid item xs={12} md={8}>
              <Paper>
                <img src={item?.image} alt="News" className="w-full h-auto" />

                <div className="p-4">
                  <p className="text-[16px] my-3">{item?.description}</p>
                  <div className="flex items-center justify-between w-full">
                    <p className="font-bold text-[13px]">
                      {" "}
                      {new Date(item?.date).toLocaleString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",

                        hour12: true,
                      })}
                    </p>
                    <Avatar
                      alt="Company Logo"
                      src={logo}
                      className="w-14 h-14"
                    />
                  </div>
                </div>
              </Paper>
            </Grid>

            {/* Right Column: Other News */}
            <Grid item xs={12} md={4}>
              <Box sx={{ margin: "5% 0% 0% 0%" }}>
                <Typography>Other News</Typography>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "transparent",
                  }}>
                  {loading ? (
                    <>
                      {upcomingEvents.map((event, index) => (
                        <EventsLoader />
                      ))}
                    </>
                  ) : (
                    <>
                      {others?.slice(0, 6).map((event, index) => (
                        <a
                          href={
                            category === "News" ? `${event.id}` : `${event.id}`
                          }
                          key={index}>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar
                                src={logo}
                                sx={{ bgcolor: "#1d640blue0" }}
                              />
                            </ListItemAvatar>
                            <ListItemText
                              sx={{
                                color: "#000",
                              }}
                              secondaryTypographyProps={{
                                color: "#000",
                                fontSize: "11px",
                              }}
                              primaryTypographyProps={{
                                fontSize: "11px",
                                fontWeight: "bold",
                              }}
                              primary={event?.title}
                              secondary={new Date(
                                category === "News"
                                  ? item?.createdAt
                                  : item?.eventsDate
                              ).toLocaleString(undefined, {
                                year: "numeric",
                                month: "long",
                                day: "numeric",

                                hour12: true,
                              })}
                            />
                          </ListItem>
                        </a>
                      ))}
                    </>
                  )}
                </List>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleContent;
