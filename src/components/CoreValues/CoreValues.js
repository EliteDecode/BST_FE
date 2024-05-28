import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import { coreValues, reasonsToChooseUs } from "../../utils/data";
import { Avatar, Collapse } from "antd";
import ButtonCustome from "../general/ButtonCustome";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const CoreValues = () => {
  return (
    <Box
      id="Core Values"
      className=" py-10 bg-[#fff]"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-in-sine">
      <Box className="container">
        <Title title="" subtitle="Our Drives" />

        <Grid container className="rounded-xl shadow-md cursor-pointer">
          <Grid
            item
            sm={12}
            md={6}
            style={{ background: "#f7f7f7" }}
            sx={{
              padding: "1% 3%",
              "@media (max-width:567px)": {
                padding: "5% 3%",
              },
            }}>
            <Box sx={{ margin: "2% 0% 0% 0%" }}>
              <List
                sx={{
                  width: "100%",

                  bgcolor: "transparent",
                }}>
                <Grid container>
                  {coreValues.map((value, index) => (
                    <Grid
                      item
                      sm={10}
                      md={10}
                      key={index}
                      sx={{ marginBottom: "5%"}}>
                      <ListItem>
                        {/* <ListItemAvatar>
                          <Avatar style={{ bgcolor: "#c39a4b" }}>
                            {value.icon}
                          </Avatar>
                        </ListItemAvatar> */}
                        <ListItemText
                          sx={{
                            color: "#000066",
                          }}
                          secondaryTypographyProps={{ color: "#000066" }}
                          primaryTypographyProps={{ fontWeight: "bold" }}
                          primary={value.value}
                          secondary={value.subtitle}
                        />
                      </ListItem>
                    </Grid>
                  ))}
                </Grid>
              </List>
            </Box>
          </Grid>
          <Grid item sm={12} md={6} className="w-full  lg:pr-8 md:pr-0 sm" style={{backgroundColor: "#F7F7F7"}}>
            <Box className="w-full ">
              <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "#000066",
                padding: "10px 0px"
              }}
              >
                Values
              </Typography>
              <Collapse
                items={reasonsToChooseUs}
                defaultActiveKey={["1"]}
                size="large"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CoreValues;
