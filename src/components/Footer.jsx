import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const links = [
  { id: 1, icon: <GitHubIcon />, name: "GitHub" },
  { id: 2, icon: <LinkedInIcon />, name: "LinkedIn" },
  { id: 3, icon: <EmailIcon />, name: "Resume" },
];

const Footer = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {links.map((link) => (
        <MenuItem key={link.id}>
          <Typography textAlign="center">{link.icon}</Typography>
        </MenuItem>
      ))}
    </Box>
  );
};
export default Footer;
