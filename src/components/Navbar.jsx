import * as React from "react";
import { Box } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

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
    <Box sx={{ pl: "4%", pr: "4%", pt: "2%", pb: "2%" }}>
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
          Joshua Hughes1
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
          Joshua Hughes2
        </Typography>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <LunchDiningIcon />
          </IconButton>
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
                <Typography textAlign="center">{link.name}</Typography>
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
          {navLinks.map((link) => (
            <Button
              key={link.id}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "inherit", display: "block" }}
            >
              {link.icon}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Box>
  );
}
export default Navbar;
