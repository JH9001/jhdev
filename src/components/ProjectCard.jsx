import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { projectLinksData } from "../data/data";
import { IconButton, Tooltip } from "@mui/material";

function ProjectCard({ item }) {
  const { name, image } = item;

  return (
    <Card>
      <CardMedia sx={{ height: "28rem" }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{ "& :hover": { color: "#f67011" } }}>
        {projectLinksData.map((link) => (
          <Tooltip key={link.id} title={link.name} arrow>
            <IconButton aria-label={link.name} size="small">
              {link.icon}
            </IconButton>
          </Tooltip>
        ))}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
