import { Button } from "@mui/material";
import React from "react";

const ButtonCustome = ({ size, color, text, type, capitalzie }) => {
  return (
    <Button
      size={size}
      variant="contained"
      disableElevation
      sx={{
        bgcolor: type === "transparent" ? "transparent" : color,
        color: type === "transparent" ? color : "#fff",

        fontSize: "11px",

        fontSize: "12px",

        fontWeight: "bold",
        textTransform: capitalzie ? "capitalize" : "uppercase",
        border:
          type === "transparent" ? `1px solid ${color}` : `1px solid ${color}`,
        "&:hover": {
          bgcolor: type === "transparent" ? color : "transparent",
          color:
            type === "transparent" ? "#fff" : type === "fill" ? "#fff" : color,
          border:
            type === "transparent" ? `1px solid ${color}` : `1px solid #fff`,
        },
      }}>
      {text}
    </Button>
  );
};

export default ButtonCustome;
