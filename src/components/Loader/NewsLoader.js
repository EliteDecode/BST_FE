import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Skeleton,
} from "@mui/material";

const NewsLoader = () => {
  return (
    <Grid item sm={12} xs={12} md={4}>
      <Card style={{ width: "100%" }} className="shadow-lg">
        <Skeleton variant="rect" height={200} animation="wave" />
        <CardContent>
          <Skeleton variant="text" width="80%" animation="wave" />
          <Skeleton variant="text" width="95%" animation="wave" />
        </CardContent>
        <div className="flex items-center justify-between mt-8 p-5">
          <div className="flex space-x-2 items-center">
            <Skeleton
              variant="circular"
              width={65}
              height={40}
              animation="wave"
            />
            <Skeleton variant="text" width="60%" animation="wave" />
          </div>
          <Skeleton variant="rect" width={100} height={30} animation="wave" />
        </div>
      </Card>
    </Grid>
  );
};

export default NewsLoader;
