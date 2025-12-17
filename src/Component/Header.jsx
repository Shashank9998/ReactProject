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


// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MenuIcon from "@mui/icons-material/Menu";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import Logo from "../assets/Mlogo.png";
// import { Link } from "react-router-dom";

// const pages = [
//   { name: "Home", link: "/" },
//   { name: "About", link: "/About" },
//   { name: "Blog", link: "/Blog" },
//   {
//     name: "Model",
//     dropdown: [
//       { name: "Sedan", link: "/Sedan" },
//       { name: "SUV", link: "/SUV" },
//       { name: "EQ", link: "/EQ" },
//       { name: "AMG", link: "/AMG" },
//     ],
//   },
//   { name: "Contact", link: "/Contact" },
// ];

// function Header() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [modelAnchor, setModelAnchor] = React.useState(null);

//   return (
//     <AppBar position="static" sx={{ background: "#000" }}>
//       {/* INLINE FONT + CSS */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

//           .header-font {
//             font-family: 'Montserrat', sans-serif;
//           }

//           .nav-link {
//             text-decoration: none;
//             position: relative;
//             color: white;
//             font-weight: 500;
//             transition: color 0.4s ease;
//           }

//           .nav-link::after {
//             content: "";
//             position: absolute;
//             bottom: 0;
//             left: 0;
//             width: 100%;
//             height: 3px;
//             background: linear-gradient(
//               90deg,
//               transparent,
//               #A6A6A6,
//               transparent
//             );
//             background-size: 300% 100%;
//             opacity: 0;
//             transition: opacity 0.4s ease;
//           }

//           .nav-link:hover {
//             color: #A6A6A6;
//           }

//           .nav-link:hover::after {
//             opacity: 1;
//             animation: shimmer111 2s linear infinite;
//           }

//           @keyframes shimmer111 {
//             0% { background-position: 200% 0; }
//             100% { background-position: -200% 0; }
//           }
//         `}
//       </style>

//       <Container maxWidth="xl">
//         <Toolbar className="header-font">

//           {/* LOGO */}
//           <Box sx={{ flexGrow: 1 }}>
//             <Link to="/">
//               <img
//                 src={Logo}
//                 alt="Logo"
//                 style={{
//                   width: 92,
//                   height: "auto",
//                   cursor: "pointer",
//                 }}
//               />
//             </Link>
//           </Box>

//           {/* MOBILE MENU */}
//           <Box sx={{ display: { xs: "block", md: "none" } }}>
//             <IconButton color="inherit" onClick={(e) => setAnchorEl(e.currentTarget)}>
//               <MenuIcon />
//             </IconButton>

//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={() => setAnchorEl(null)}
//               PaperProps={{ sx: { background: "#111", color: "#fff" } }}
//             >
//               {pages.map((page) =>
//                 page.dropdown ? (
//                   page.dropdown.map((item) => (
//                     <MenuItem
//                       key={item.name}
//                       component={Link}
//                       to={item.link}
//                       onClick={() => setAnchorEl(null)}
//                     >
//                       {item.name}
//                     </MenuItem>
//                   ))
//                 ) : (
//                   <MenuItem
//                     key={page.name}
//                     component={Link}
//                     to={page.link}
//                     onClick={() => setAnchorEl(null)}
//                   >
//                     {page.name}
//                   </MenuItem>
//                 )
//               )}
//             </Menu>
//           </Box>

//           {/* DESKTOP MENU */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
//             {pages.map((page) =>
//               page.dropdown ? (
//                 <Box key={page.name}>
//                   <Button
//                     className="nav-link"
//                     onClick={(e) => setModelAnchor(e.currentTarget)}
//                     sx={{ fontSize: "18px", textTransform: "none" }}
//                   >
//                     {page.name}
//                   </Button>

//                   <Menu
//                     anchorEl={modelAnchor}
//                     open={Boolean(modelAnchor)}
//                     onClose={() => setModelAnchor(null)}
//                     PaperProps={{ sx: { background: "#111", color: "#fff" } }}
//                   >
//                     {page.dropdown.map((item) => (
//                       <MenuItem
//                         key={item.name}
//                         component={Link}
//                         to={item.link}
//                         onClick={() => setModelAnchor(null)}
//                       >
//                         {item.name}
//                       </MenuItem>
//                     ))}
//                   </Menu>
//                 </Box>
//               ) : (
//                 <Button
//                   key={page.name}
//                   component={Link}
//                   to={page.link}
//                   className="nav-link"
//                   sx={{ fontSize: "18px", textTransform: "none" }}
//                 >
//                   {page.name}
//                 </Button>
//               )
//             )}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default Header;


// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MenuIcon from "@mui/icons-material/Menu";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import Logo from "../assets/Mlogo.png";
// import { Link } from "react-router-dom";

// const pages = [
//   { name: "Home", link: "/" },
//   { name: "About", link: "/About" },
//   { name: "Blog", link: "/Blog" },
//   {
//     name: "Model",
//     dropdown: [
//       { name: "Sedan", link: "/Sedan" },
//       { name: "SUV", link: "/SUV" },
//       { name: "EQ", link: "/EQ" },
//       { name: "AMG", link: "/AMG" },
//     ],
//   },
//   { name: "Contact", link: "/Contact" },
// ];

// function Header() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [modelAnchor, setModelAnchor] = React.useState(null);

//   return (
//     <AppBar position="static" sx={{ background: "#000" }}>
//       {/* INLINE FONT + CSS */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

//           .header-font {
//             font-family: 'Montserrat', sans-serif;
//           }

//           .nav-link {
//             text-decoration: none;
//             position: relative;
//             color: white;
//             font-weight: 500;
//             transition: color 0.4s ease;
//           }

//           .nav-link::after {
//             content: "";
//             position: absolute;
//             bottom: 0;
//             left: 0;
//             width: 100%;
//             height: 3px;
//             background: linear-gradient(
//               90deg,
//               transparent,
//               #A6A6A6,
//               transparent
//             );
//             background-size: 300% 100%;
//             opacity: 0;
//             transition: opacity 0.4s ease;
//           }

//           .nav-link:hover {
//             color: #A6A6A6;
//           }

//           .nav-link:hover::after {
//             opacity: 1;
//             animation: shimmer111 2s linear infinite;
//           }

//           @keyframes shimmer111 {
//             0% { background-position: 200% 0; }
//             100% { background-position: -200% 0; }
//           }
//         `}
//       </style>

//       <Container maxWidth="xl">
//         <Toolbar className="header-font">

//           {/* LOGO */}
//           <Box sx={{ flexGrow: 1 }}>
//             <Link to="/">
//               <img
//                 src={Logo}
//                 alt="Logo"
//                 style={{
//                   width: 92,
//                   height: "auto",
//                   cursor: "pointer",
//                 }}
//               />
//             </Link>
//           </Box>

//           {/* MOBILE MENU */}
//           <Box sx={{ display: { xs: "block", md: "none" } }}>
//             <IconButton color="inherit" onClick={(e) => setAnchorEl(e.currentTarget)}>
//               <MenuIcon />
//             </IconButton>

//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={() => setAnchorEl(null)}
//               PaperProps={{ sx: { background: "#111", color: "#fff" } }}
//             >
//               {pages.map((page) =>
//                 page.dropdown ? (
//                   page.dropdown.map((item) => (
//                     <MenuItem
//                       key={item.name}
//                       component={Link}
//                       to={item.link}
//                       onClick={() => setAnchorEl(null)}
//                     >
//                       {item.name}
//                     </MenuItem>
//                   ))
//                 ) : (
//                   <MenuItem
//                     key={page.name}
//                     component={Link}
//                     to={page.link}
//                     onClick={() => setAnchorEl(null)}
//                   >
//                     {page.name}
//                   </MenuItem>
//                 )
//               )}
//             </Menu>
//           </Box>

//           {/* DESKTOP MENU */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
//             {pages.map((page) =>
//               page.dropdown ? (
//                 <Box key={page.name}>
//                   <Button
//                     className="nav-link"
//                     onClick={(e) => setModelAnchor(e.currentTarget)}
//                     sx={{ fontSize: "18px", textTransform: "none" }}
//                   >
//                     {page.name}
//                   </Button>

//                   <Menu
//                     anchorEl={modelAnchor}
//                     open={Boolean(modelAnchor)}
//                     onClose={() => setModelAnchor(null)}
//                     PaperProps={{ sx: { background: "#111", color: "#fff" } }}
//                   >
//                     {page.dropdown.map((item) => (
//                       <MenuItem
//                         key={item.name}
//                         component={Link}
//                         to={item.link}
//                         onClick={() => setModelAnchor(null)}
//                       >
//                         {item.name}
//                       </MenuItem>
//                     ))}
//                   </Menu>
//                 </Box>
//               ) : (
//                 <Button
//                   key={page.name}
//                   component={Link}
//                   to={page.link}
//                   className="nav-link"
//                   sx={{ fontSize: "18px", textTransform: "none" }}
//                 >
//                   {page.name}
//                 </Button>
//               )
//             )}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default Header;


// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MenuIcon from "@mui/icons-material/Menu";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import Logo from "../assets/Mlogo.png";
// import { Link } from "react-router-dom";

// const pages = [
//   { name: "Home", link: "/" },
//   { name: "About", link: "/About" },
//   { name: "Blog", link: "/Blog" },
//   {
//     name: "Model",
//     dropdown: [
//       { name: "Sedan", link: "/Sedan" },
//       { name: "SUV", link: "/SUV" },
//       { name: "EQ", link: "/EQ" },
//       { name: "AMG", link: "/AMG" },
//     ],
//   },
//   { name: "Contact", link: "/Contact" },
// ];

// export default function Header() {
//   const [mobileAnchor, setMobileAnchor] = React.useState(null);
//   const [modelAnchor, setModelAnchor] = React.useState(null);
//   const [mobileModelOpen, setMobileModelOpen] = React.useState(false);

//   return (
//     <AppBar position="static" sx={{ background: "#000" }}>
//       {/* ================= CSS ================= */}
//       <style>
//         {`
//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

//         .header-font { font-family: 'Montserrat', sans-serif; }

//         .nav-link {
//           position: relative;
//           color: white;
//           font-weight: 500;
//           padding: 6px 12px;
//           text-transform: none;
//           transition: color 0.3s ease;
//         }

//         .nav-link::after {
//           content: "";
//           position: absolute;
//           bottom: -4px;
//           left: 0;
//           width: 100%;
//           height: 3px;
//           background: linear-gradient(90deg, transparent, #A6A6A6, transparent);
//           background-size: 300% 100%;
//           opacity: 0;
//         }

//         .nav-link:hover {
//           color: #A6A6A6;
//         }

//         .nav-link:hover::after {
//           opacity: 1;
//           animation: shimmer 2s linear infinite;
//         }

//         @keyframes shimmer {
//           0% { background-position: 200% 0; }
//           100% { background-position: -200% 0; }
//         }

//         .dropdown-item {
//           color: white;
//           font-weight: 500;
//           padding: 12px 24px;
//           width: 180px;
//         }

//         .dropdown-item:hover {
//           color: #A6A6A6;
//           background: rgba(255,255,255,0.06);
//         }
//       `}
//       </style>

//       <Container maxWidth="xl">
//         <Toolbar className="header-font">

//           {/* LOGO */}
//           <Box sx={{ flexGrow: 1 }}>
//             <Link to="/">
//               <img src={Logo} alt="Logo" style={{ width: 90 }} />
//             </Link>
//           </Box>

//           {/* ================= MOBILE ================= */}
//           <Box sx={{ display: { xs: "block", md: "none" } }}>
//             <IconButton color="inherit" onClick={(e) => setMobileAnchor(e.currentTarget)}>
//               <MenuIcon />
//             </IconButton>

//             <Menu
//               anchorEl={mobileAnchor}
//               open={Boolean(mobileAnchor)}
//               onClose={() => setMobileAnchor(null)}
//               PaperProps={{ sx: { background: "#111", color: "#fff", minWidth: 240 } }}
//             >
//               {pages.map((page) =>
//                 page.dropdown ? (
//                   <Box key={page.name}>
//                     <MenuItem onClick={() => setMobileModelOpen(!mobileModelOpen)}>
//                       <Typography className="nav-link">
//                         {page.name}
//                       </Typography>
//                     </MenuItem>

//                     {mobileModelOpen &&
//                       page.dropdown.map((item) => (
//                         <MenuItem
//                           key={item.name}
//                           component={Link}
//                           to={item.link}
//                           sx={{ pl: 4 }}
//                           className="dropdown-item"
//                           onClick={() => setMobileAnchor(null)}
//                         >
//                           {item.name}
//                         </MenuItem>
//                       ))}
//                   </Box>
//                 ) : (
//                   <MenuItem
//                     key={page.name}
//                     component={Link}
//                     to={page.link}
//                     onClick={() => setMobileAnchor(null)}
//                   >
//                     <Typography className="nav-link">{page.name}</Typography>
//                   </MenuItem>
//                 )
//               )}
//             </Menu>
//           </Box>

//           {/* ================= DESKTOP ================= */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
//             {pages.map((page) =>
//               page.dropdown ? (
//                 <Box key={page.name}>
//                   <Button
//                     className="nav-link"
//                     endIcon={<KeyboardArrowDownIcon />}
//                     onMouseEnter={(e) => setModelAnchor(e.currentTarget)}
//                   >
//                     {page.name}
//                   </Button>

//                   <Menu
//                     anchorEl={modelAnchor}
//                     open={Boolean(modelAnchor)}
//                     onClose={() => setModelAnchor(null)}
//                     MenuListProps={{
//                       onMouseLeave: () => setModelAnchor(null),
//                       sx: { p: 0 },
//                     }}
//                     PaperProps={{
//                       sx: {
//                         background: "#111",
//                         mt: 1,
//                         borderRadius: 1,
//                       },
//                     }}
//                   >
//                     {page.dropdown.map((item) => (
//                       <MenuItem
//                         key={item.name}
//                         component={Link}
//                         to={item.link}
//                         className="dropdown-item"
//                         onClick={() => setModelAnchor(null)}
//                       >
//                         {item.name}
//                       </MenuItem>
//                     ))}
//                   </Menu>
//                 </Box>
//               ) : (
//                 <Button
//                   key={page.name}
//                   component={Link}
//                   to={page.link}
//                   className="nav-link"
//                 >
//                   {page.name}
//                 </Button>
//               )
//             )}
//           </Box>

//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }


// import React from "react";
// import {
//   AppBar,
//   Box,
//   Toolbar,
//   IconButton,
//   Menu,
//   MenuItem,
//   Button,
//   Container,
//   Typography,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { Link } from "react-router-dom";
// import Logo from "../assets/Mlogo.png";

// const pages = [
//   { name: "Home", link: "/" },
//   { name: "About", link: "/About" },
//   { name: "Blog", link: "/Blog" },
//   {
//     name: "Model",
//     dropdown: [
//       { name: "Sedan", link: "/Sedan" },
//       { name: "SUV", link: "/SUV" },
//       { name: "EQ", link: "/EQ" },
//       { name: "AMG", link: "/AMG" },
//     ],
//   },
//   { name: "Contact", link: "/Contact" },
// ];

// function Header() {
//   const [mobileAnchor, setMobileAnchor] = React.useState(null);
//   const [desktopAnchor, setDesktopAnchor] = React.useState(null);
//   const [mobileModelOpen, setMobileModelOpen] = React.useState(false);

//   return (
//     <AppBar position="sticky" sx={{ background: "#000" }}>
//       {/* ================= CSS ================= */}
//       <style>
//         {`
//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

//         .header-font { font-family: 'Montserrat', sans-serif; }

//         /* ===== MAIN NAV LINK ===== */
//         .nav-link {
//           position: relative;
//           color: white;
//           font-weight: 500;
//           padding: 8px 14px;
//           text-transform: none;
//           transition: color 0.3s ease;
//         }

//         .nav-link::after {
//           content: "";
//           position: absolute;
//           bottom: -4px;
//           left: 0;
//           width: 100%;
//           height: 3px;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             #A6A6A6,
//             transparent
//           );
//           background-size: 300% 100%;
//           opacity: 0;
//         }

//         .nav-link:hover {
//           color: #A6A6A6;
//         }

//         .nav-link:hover::after {
//           opacity: 1;
//           animation: shimmer 2s linear infinite;
//         }

//         @keyframes shimmer {
//           0% { background-position: 200% 0; }
//           100% { background-position: -200% 0; }
//         }

//         /* ===== DROPDOWN PANEL ===== */
//         .dropdown-panel {
//           background: #0f0f0f;
//           border-radius: 10px;
//           padding: 8px 0;
//           min-width: 220px;
//         }

//         /* ===== DROPDOWN ITEM (SAME EFFECT) ===== */
//         .dropdown-item {
//           position: relative;
//           color: white;
//           font-weight: 500;
//           padding: 12px 24px;
//           transition: color 0.3s ease;
//         }

//         .dropdown-item::after {
//           content: "";
//           position: absolute;
//           bottom: 6px;
//           left: 16px;
//           width: calc(100% - 32px);
//           height: 3px;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             #A6A6A6,
//             transparent
//           );
//           background-size: 300% 100%;
//           opacity: 0;
//         }

//         .dropdown-item:hover {
//           color: #A6A6A6;
//           background: rgba(255,255,255,0.05);
//         }

//         .dropdown-item:hover::after {
//           opacity: 1;
//           animation: shimmer 2s linear infinite;
//         }
//       `}
//       </style>

//       <Container maxWidth="xl">
//         <Toolbar className="header-font">

//           {/* ================= LOGO ================= */}
//           <Box sx={{ flexGrow: 1 }}>
//             <Link to="/">
//               <img src={Logo} alt="Logo" style={{ width: 90 }} />
//             </Link>
//           </Box>

//           {/* ================= MOBILE ================= */}
//           <Box sx={{ display: { xs: "block", md: "none" } }}>
//             <IconButton color="inherit" onClick={(e) => setMobileAnchor(e.currentTarget)}>
//               <MenuIcon />
//             </IconButton>

//             <Menu
//               anchorEl={mobileAnchor}
//               open={Boolean(mobileAnchor)}
//               onClose={() => setMobileAnchor(null)}
//               PaperProps={{ sx: { background: "#111", color: "#fff", minWidth: 260 } }}
//             >
//               {pages.map((page) =>
//                 page.dropdown ? (
//                   <Box key={page.name}>
//                     <MenuItem onClick={() => setMobileModelOpen(!mobileModelOpen)}>
//                       <Typography sx={{ flexGrow: 1 }}>{page.name}</Typography>
//                       <KeyboardArrowDownIcon
//                         sx={{
//                           transform: mobileModelOpen ? "rotate(180deg)" : "rotate(0)",
//                           transition: "0.3s",
//                         }}
//                       />
//                     </MenuItem>

//                     {mobileModelOpen &&
//                       page.dropdown.map((item) => (
//                         <MenuItem
//                           key={item.name}
//                           component={Link}
//                           to={item.link}
//                           onClick={() => setMobileAnchor(null)}
//                           sx={{ pl: 4 }}
//                           className="dropdown-item"
//                         >
//                           {item.name}
//                         </MenuItem>
//                       ))}
//                   </Box>
//                 ) : (
//                   <MenuItem
//                     key={page.name}
//                     component={Link}
//                     to={page.link}
//                     onClick={() => setMobileAnchor(null)}
//                   >
//                     {page.name}
//                   </MenuItem>
//                 )
//               )}
//             </Menu>
//           </Box>

//           {/* ================= DESKTOP ================= */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
//             {pages.map((page) =>
//               page.dropdown ? (
//                 <Box
//                   key={page.name}
//                   onMouseEnter={(e) => setDesktopAnchor(e.currentTarget)}
//                   onMouseLeave={() => setDesktopAnchor(null)}
//                 >
//                   <Button
//                     className="nav-link"
//                     endIcon={<KeyboardArrowDownIcon />}
//                   >
//                     {page.name}
//                   </Button>

//                   <Menu
//                     anchorEl={desktopAnchor}
//                     open={Boolean(desktopAnchor)}
//                     disableAutoFocusItem
//                     PaperProps={{ className: "dropdown-panel", sx: { mt: 1 } }}
//                     MenuListProps={{
//                       onMouseEnter: () => setDesktopAnchor(desktopAnchor),
//                       onMouseLeave: () => setDesktopAnchor(null),
//                     }}
//                   >
//                     {page.dropdown.map((item) => (
//                       <MenuItem
//                         key={item.name}
//                         component={Link}
//                         to={item.link}
//                         className="dropdown-item"
//                         onClick={() => setDesktopAnchor(null)}
//                       >
//                         {item.name}
//                       </MenuItem>
//                     ))}
//                   </Menu>
//                 </Box>
//               ) : (
//                 <Button
//                   key={page.name}
//                   component={Link}
//                   to={page.link}
//                   className="nav-link"
//                   onMouseEnter={() => setDesktopAnchor(null)}
//                 >
//                   {page.name}
//                 </Button>
//               )
//             )}
//           </Box>

//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default Header;