import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import logo from "../../assets/logoblue.png";
import { newsArray } from "../../utils/data";
import { Avatar, Card } from "antd";
import ButtonCustome from "../general/ButtonCustome";
import { Link } from "react-router-dom";

const { Meta } = Card;
const News = () => {
  return (
    <Box id="All News" className=" py-10 bg-[#f7f7f7]">
      <Box className="container">
        <Title title="Events" subtitle="All Events" />

        <Grid container spacing={4}>
          {newsArray.map((news, index) => {
            const { image, title, description, date, id } = news;

            return (
              <Grid item sm={12} xs={12} md={4} key={index}>
                <Card
                  style={{
                    width: "100%",
                  }}
                  className="shadow-lg"
                  cover={<img alt="Logo of poster" src={image} />}>
                  <Meta
                    title={title}
                    description={
                      description.length > 200
                        ? ` ${description.slice(0, 200)}...`
                        : description
                    }
                  />
                  <Box className="flex items-center justify-between mt-8">
                    <Box className="flex space-x-2 items-center">
                      <Avatar src={logo} />
                      <Typography variant="subtitle2">{date}</Typography>
                    </Box>
                    <Link to={`news/${id}`}>
                      <ButtonCustome
                        size="small"
                        color="#c39a4b"
                        text="Read More"
                        type="transparent"
                      />
                    </Link>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default News;
