import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Grid, IconButton, Tooltip } from "@mui/material";

function ProjectCard({ item }) {
  const { name, image, description1, description2, tech, links } = item;

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        image={image}
        alt={name}
        title={name}
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
      />
      <CardContent sx={{ fontSize: "h5" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 500, pt: "0.5rem", pb: "0.5rem" }}
        >
          {name}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontWeight: 500, pb: "1rem" }}
        >
          {description1}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          {description2}
        </Typography>
        <Grid
          container
          sx={{
            display: "flex",
          }}
        >
          {tech.map((item) => {
            return (
              <Grid item key={item.id}>
                <Typography
                  sx={{
                    pt: "1.5rem",
                    pr: "1rem",
                    fontWeight: 500,
                    fontSize: "1.2rem",
                  }}
                >
                  {item.name}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
      <CardActions
        sx={{
          "& :hover": { color: "#f67011" },
          display: "flex",
          justifyContent: "flex-end",
          pr: "1.5rem",
          pb: "1rem",
          mt: "auto",
        }}
      >
        {links.map((link) => (
          <Tooltip key={link.id} title={link.name} arrow>
            <a href={link.href} target="_blank">
              <IconButton aria-label={link.name} size="large">
                {link.icon}
              </IconButton>
            </a>
          </Tooltip>
        ))}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
