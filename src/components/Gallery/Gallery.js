import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";
import Title from "../general/Title";

import { galleryImages } from "../../utils/data";
import { ImageViewer } from "react-image-viewer-dv";
import { useApiGlobalContext } from "../../utils/apiContext";
import { Typography } from "antd";

const Gallery = () => {
  return (
    <Box
      id="Gallery"
      className=" py-10 bg-[#f7f7f7]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="Gallery" subtitle="Our Gallery" />
        <Box>
          <Grid container rowSpacing={4}>
            {galleryImages?.map((item) => (
              <Grid item sm={6} md={4} className="p-2">
                <ImageViewer>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="border rounded-2xl h-[270px] shadow-lg"
                  />
                </ImageViewer>
                {/* <Typography>{item.title}</Typography> */}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Gallery;
