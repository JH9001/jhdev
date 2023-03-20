import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

import { navLinks } from "../data/data";

const Footer = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {navLinks.map((link) => (
        <MenuItem key={link.id}>
          <Typography textAlign="center">{link.icon}</Typography>
        </MenuItem>
      ))}
    </Box>
  );
};
export default Footer;
