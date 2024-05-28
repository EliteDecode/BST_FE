import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Skeleton,
  ListItemText,
} from "@mui/material";

const EventsLoader = () => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: "#1d6400" }}>
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
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
        }}>
        <Skeleton width={100} height={15} animation="wave" />
        <Skeleton width={80} height={10} animation="wave" />
      </ListItemText>
    </ListItem>
  );
};

export default EventsLoader;
