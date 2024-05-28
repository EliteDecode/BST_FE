import { Box, Button, CardMedia, Typography } from "@mui/material";
import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Icons from "../Icons/Fend";
import { coursesPartitions } from "../../utils/data";
// import Html5 from "../../assets/svg/html5.svg"

const SchoolDepartmentCard = ({ data, triggeredFrom }) => {
  return (
    <Card
      className="shadow-lg w-full"
      bordered={false}
      style={{ fontWeight: "bold", fontSize: "15px", width: "100%" }}>
      {data.name}
      <Box>{data.icon}</Box>
      <Typography
        variant="subtitle2"
        sx={{ fontWeight: "bold", opacity: "0.5" }}>
        {data?.price}
      </Typography>

      <Box className="mt-5">
        <Link to={`/Diploma/courses/course/departments/${data.name}`}>
          <Button
            variant="outlined"
            disableElevation
            size="small"
            sx={{
              bgcolor: "#e3caca",
              color: "#0000666",
              border: "none",
              fontSize: "12px",
              textTransform: "capitalize",
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "#d6babb",
                color: "#0000666",
                border: "none",
              },
            }}>
            View Course
          </Button>
        </Link>
      </Box>
    </Card>
  );
};

export default SchoolDepartmentCard;
