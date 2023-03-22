import * as React from "react";
import { Box } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

import { navLinks } from "../data/data";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        pl: "4%",
        pr: "4%",
        pt: "2%",
        pb: "2%",
      }}
    >
      <Toolbar disableGutters>
        <Typography
          variant="h4"
          noWrap
          component="a"
          href="/"
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            fontWeight: 500,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Joshua Hughes
        </Typography>

        <Typography
          variant="h4"
          noWrap
          component="a"
          href=""
          sx={{
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontWeight: 500,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Joshua Hughes
        </Typography>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <Stack sx={{ "& :hover": { color: "#f67011" } }}>
            <IconButton
              size="large"
              aria-label="hamburger"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ "& :hover": { color: "purple" } }}
            >
              <LunchDiningIcon />
            </IconButton>
          </Stack>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {navLinks.map((link) => (
              <MenuItem key={link.id} onClick={handleCloseNavMenu}>
                {link.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box
          sx={{
            justifyContent: "flex-end",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Stack direction="row" sx={{ "& :hover": { color: "#f67011" } }}>
            {navLinks.map((link) => (
              <IconButton key={link.id} aria-label={link.name} size="large">
                {link.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Toolbar>
    </Box>
  );
}
export default Navbar;
