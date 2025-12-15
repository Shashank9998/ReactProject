// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import Logo from "../assets/Mlogo.png";


// const pages = [
//   { name: "Home", link: "/" },
//   { name: "About", link: "/About" },
//   { name: "Blog", link: "/Blog" },
//   { name: "Model", link: "/Model" },
//   { name: "Contact", link: "/Contact" },
// ];

// function Header() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const isMenuOpen = Boolean(anchorElNav);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   // Close menu and optionally navigate (anchor does the navigation)
//   const handleMenuItemClick = (event) => {
//     // event.currentTarget is the <a> inside MenuItem; let anchor handle navigation
//     handleCloseNavMenu();
//   };

//   return (
//     <AppBar
//       position="static"
//       elevation={4}
//       sx={{
//         background: "black", // transparent black
//       }}
//     >
//       {/* Local CSS for shimmer + styling. Move to a .css file if preferred */}
//       <style>
//         {`
//           /* Logo hover */
//           .logo-hover {
//             transition: transform 0.26s ease, box-shadow 0.26s ease;
//             border-radius: 6px;
//             display: inline-block;
//           }
//           .logo-hover:hover {
//             transform: translateY(-2px) scale(1.03);
//             box-shadow: 0 10px 24px rgba(0,0,0,0.45);
//           }

//           /* nav link base */
//           .nav-link {
//             text-decoration: none;
//             position: relative;
//             transition: color 0.32s ease;
//             color: white;
//             padding-bottom: 6px;
//             display: inline-block;
//           }

//           /* shimmer underline */
//           .nav-link::after {
//             content: '';
//             position: absolute;
//             bottom: 0;
//             left: 0;
//             width: 100%;
//             height: 3px;
//             background: linear-gradient(90deg, transparent, #888585ff, transparent);
//             background-size: 300% 100%;
//             opacity: 0;
//             transition: opacity 0.32s ease;
//             transform: translateZ(0);
//           }

//           /* hover color (premium silver) and activate shimmer */
//           .nav-link:hover {
//             color: #C0C0C0;
//           }
//           .nav-link:hover::after {
//             opacity: 1;
//             animation: shimmerSilver 1.8s linear infinite;
//           }
//           @keyframes shimmerSilver {
//             0% { background-position: 200% 0; }
//             100% { background-position: -200% 0; }
//           }

//           /* mobile menu item anchor style (bigger hit area) */
//           .mui-menuitem-link {
//             width: 100%;
//             display: inline-block;
//             padding: 8px 0;
//             color: inherit;
//           }
//         `}
//       </style>

//       <Container maxWidth="xl">
//         <Toolbar disableGutters sx={{ gap: 2, alignItems: "center" }}>
//           {/* LOGO */}
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <a href="/">
//               <img
//                 src={Logo}
//                 alt="Site logo"
//                 className="logo-hover"
//                 style={{
//                   width: 110,
//                   height: 64,
//                   objectFit: "contain",
//                 }}
//               />
//             </a>
//           </Box>

//           {/* flexible spacer */}
//           <Box sx={{ flexGrow: 1 }} />

//           {/* --- Improved Menu (popover) --- */}
//           <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
//             <IconButton
//               size="large"
//               edge="end"
//               color="inherit"
//               aria-label="open navigation menu"
//               aria-controls={isMenuOpen ? "primary-navigation" : undefined}
//               aria-haspopup="true"
//               aria-expanded={isMenuOpen ? "true" : undefined}
//               onClick={handleOpenNavMenu}
//             >
//               <MenuIcon />
//             </IconButton>

//             <Menu
//               id="primary-navigation"
//               anchorEl={anchorElNav}
//               open={isMenuOpen}
//               onClose={handleCloseNavMenu}
//               onKeyDown={(e) => {
//                 // Close on Escape for better keyboard UX
//                 if (e.key === "Escape") handleCloseNavMenu();
//               }}
//               anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//               transformOrigin={{ vertical: "top", horizontal: "right" }}
//               PaperProps={{
//                 sx: {
//                   background: "rgba(0,0,0,0.95)",
//                   color: "#fff",
//                   minWidth: 200,
//                   borderRadius: 2,
//                   py: 1,
//                 },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem
//                   key={page.name}
//                   onClick={(e) => {
//                     // allow anchor navigation but close menu first
//                     handleCloseNavMenu();
//                   }}
//                   sx={{
//                     px: 2.5,
//                     py: 1.25,
                    
//                     minHeight: 56,
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                   disableGutters
//                 >
//                   <a
//                     className="mui-menuitem-link nav-link"
//                     href={page.link}
//                     onClick={handleCloseNavMenu}
//                     aria-label={page.name}
//                     style={{
//                       width: "100%",
//                       textDecoration: "none",
//                       color: "inherit",
//                       display: "inline-block",
//                       padding: "8px 0",
//                       textAlign: "center",
//                     }}
//                   >
//                     {page.name}
//                   </a>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>


//           {/* Desktop nav (hidden on small screens) */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center" }}>
//             {pages.map((page) => (
//               <Button
//                 key={page.name}
//                 component="a"
//                 href={page.link}
//                 className="nav-link"
//                 sx={{
//                   color: "white",
//                   fontWeight: 600,
//                   fontSize: "15px",
//                   textTransform: "none",
//                   minWidth: "auto",
//                 }}
//                 aria-label={page.name}
//               >
//                 {page.name}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default Header;


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
      
      {/* INLINE GOOGLE FONT + CSS */}
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

          {/* MOBILE MENU */}
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

          {/* DESKTOP MENU */}
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


