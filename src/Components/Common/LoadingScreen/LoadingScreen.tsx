import React from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const LoadingScreen = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <CircularProgress size={30} thickness={3} color="primary" />
        <Typography variant="subtitle1" sx={{ marginTop: "5px" }}>
          Please Wait...
        </Typography>
      </Box>
    </div>
  );
};

export default LoadingScreen;
