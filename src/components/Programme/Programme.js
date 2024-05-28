import React from 'react'
import { Box, Grid, Typography } from "@mui/material";
import { Avatar, Collapse } from "antd";
import { coreValues, reasonsToChooseUs, descriptionPrograms } from "../../utils/data";


function Programme({Title, courseKey, courseLabel, courseDes, courseKey2, courseLabel2, courseDes2, courseKey3, courseLabel3, courseDes3, courseKey4, courseLabel4, courseDes4, courseKey5, courseLabel5, courseDes5}) {

  const courseDescription = [
    {
      key:[courseKey],
      label:[courseLabel],
      children:[courseDes]
    },
    {
      key:[courseKey2],
      label:[courseLabel2],
      children:[courseDes2]
    },
    {
      key:[courseKey3],
      label:[courseLabel3],
      children:[courseDes3]
    },
    {
      key:[courseKey4],
      label:[courseLabel4],
      children:[courseDes4]
    },
    {
      key:[courseKey5],
      label:[courseLabel5],
      children:[courseDes5]
    },
  ]
  return (
    <>
        <h2 className='text-center text-[40px] font-bold py-5'>{Title}</h2>
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
               
              </Typography>
              <Collapse
                items={courseDescription}
                defaultActiveKey={["1"]}
                size="large"
              />
        </Box>
    </>
  )
}

export default Programme