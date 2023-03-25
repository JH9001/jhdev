import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";

import { projectsData } from "../data/data";
import ProjectCard from "./ProjectCard";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Projects() {
  return (
    <Box sx={{ pl: "6%", pr: "6%", pt: "6%" }}>
      <Typography
        sx={{
          fontSize: "h5",
          fontWeight: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pb: "2%",
        }}
      >
        <ArrowDownwardIcon /> Check out some of my projects
        <ArrowDownwardIcon />
      </Typography>
      <Box>
        <Grid container spacing={{ xs: 3.5, md: 3.5 }}>
          {projectsData.map((item, index) => (
            <Grid xs={12} sm={12} md={6} key={index}>
              <ProjectCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Projects;
