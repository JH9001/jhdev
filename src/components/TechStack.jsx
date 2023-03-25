import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";

import { techStackData } from "../data/data";

import FavoriteIcon from "@mui/icons-material/Favorite";

function TechStack() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "h5",
          fontWeight: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pb: "0.8%%",
        }}
      >
        Tech I <FavoriteIcon sx={{ ml: "0.4rem", color: "#f67011" }} />
      </Typography>
      <Box sx={{ pl: "4%", pr: "4%" }}>
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {techStackData.map((item) => (
              <Grid
                key={item.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: "4.2rem",
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 350, md: 250 },
                    }}
                    src={item.icon}
                    alt={item.name}
                  />
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default TechStack;
