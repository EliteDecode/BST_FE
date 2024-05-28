import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
const Breadcrumbs = ({ primaryPage, secondaryPage }) => (
  <Box className="container">
    <Breadcrumb
      className=" my-5 text-[11px]"
      items={[
        {
          title: (
            <Link to={`/${primaryPage}`} className="text-[11px]">
              {primaryPage}
            </Link>
          ),
        },
        {
          title: <span className="text-[11px]">{secondaryPage}</span>,
        },
      ]}
    />
  </Box>
);
export default Breadcrumbs;
