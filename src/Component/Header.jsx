import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Logo from "../assets/Mlogo.png";
import { Link } from 'react-router-dom';

const pages = [
  { name: "Home", link: "/" },
  { name: "About", link: "/About" },
  { name: "Blog", link: "/Blog" },
  { name: "Model", link: "/Model" },
  { name: "Contact", link: "/Contact" },
];

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <AppBar position="static" sx={{ background: "#000"  }}>
      
    
      <style>
        {`
          /* Google Font Import */
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

          .header-font {
            font-family: 'Montserrat', sans-serif;
          }

          // .logo-hover:hover {
          //   transform: scale(1.06);
          //   // box-shadow: 0 0px 20px rgba(248, 246, 246, 0.5);
          //   // transition: transform 0.3s ease, box-shadow 0.3s ease;
          // }

          .nav-link {
            text-decoration: none;
            position: relative;
            color: white;
            font-weight: 500;
            transition: color 0.4s ease;
          }

          .nav-link::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(
              90deg,
              transparent,
              #A6A6A6,
              transparent
            );
            background-size: 300% 100%;
            opacity: 0;
            transition: opacity 0.4s ease;
          }

          .nav-link:hover {
            color: #A6A6A6;
          }

          .nav-link:hover::after {
            opacity: 1;
            animation: shimmer111 2s linear infinite;
          }

          @keyframes shimmer111 {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }
        `}
      </style>

      <Container maxWidth="xl">
        <Toolbar className="header-font">

          {/* LOGO */}
          <Box sx={{ flexGrow: 1  }}>
            <a href="/">
              <img
                src={Logo}
                alt="Logo"
                className="logo-hover"
                style={{
                  width: 92,
                  // height: 68,
                  height: "auto",
                  objectFit: "contain",
                  // position: "relative",
                  cursor: "pointer",
                  transition: "0.3s ease",
                  borderRadius: "5px",
                }}
              />
            </a>
          </Box>

         
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              color="inherit"
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              PaperProps={{
                sx: {
                  background: "#111",
                  color: "#fff",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  component="a"
                  href={page.link}
                  onClick={() => setAnchorEl(null)}
                  className="nav-link"
                  sx={{
                    justifyContent: "center",
                    fontSize: "15px",
                  }}
                >
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>

         
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component="a"
                href={page.link}
                className="nav-link"
                sx={{
                  textTransform: "none",
                  fontSize: "18px",
                  background: "transparent",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;


