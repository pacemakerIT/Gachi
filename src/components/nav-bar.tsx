"use client";

import * as React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";

// Import extracted components
import MobileDrawer from "./mobile-drawer";
import ProfileIcon from "./profile-icon";

interface Props {}

const NavBar: React.FC<Props> = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Change for testing logged-in state
  const [navDrawerOpen, setNavDrawerOpen] = React.useState(false);
  const [profileDrawerOpen, setProfileDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null); // For Profile Menu
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const closeNavDrawer = () => {
    setNavDrawerOpen(false);
  };

  const toggleProfileDrawer = () => {
    setProfileDrawerOpen(!profileDrawerOpen);
    if (navDrawerOpen) {
      setNavDrawerOpen(false); // Close main nav drawer if it's open
    }
  };

  const closeProfileDrawer = () => {
    setProfileDrawerOpen(false);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    if (navDrawerOpen) {
      setNavDrawerOpen(false); // Close the main drawer if it's open
    }
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Programs", label: "프로그램" },
    { href: "/Mentors", label: "멘토" },
    { href: "/Pages", label: "페이지" },
    { href: "/about", label: "About" },
  ];

  const profileLinks = [
    { href: "/profile", label: "Profile" },
    { href: "/myMentors", label: "My Mentors" },
    { href: "/myPrograms", label: "My Programs" },
    { href: "/logout", label: "Logout" },  // /logout page will give them a msg "you have been logged out" and then send them back to home menu after few seconds

  ];

  return (
    <>
      {/* Top Black Bar */}
      <Box
        sx={{ backgroundColor: theme.palette.secondary.main, height: "25px", width: "100%" }}
      />

      {/* AppBar */}
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between", maxHeight: "20px" }}>
          {isMobile ? (
            <>
              {/* Hamburger Icon for Mobile View */}
              <IconButton color="inherit" onClick={toggleNavDrawer}>
                <MenuIcon />
              </IconButton>

              {/* Logo and Title in the center */}
              <Box sx={{ display: "flex", alignItems: "center", mx: "auto" }}>
                <Image src="/images/logo.png" alt="Gachi.live logo" width={40} height={40} />
                <Box
                  component="h6"
                  sx={{
                    fontSize: theme.typography.h6.fontSize,
                    marginLeft: "10px",
                    fontFamily: theme.typography.h6.fontFamily,
                  }}
                >
                  Gachi.live
                </Box>
              </Box>

              {/* Profile Icon or Login Button on the Right */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {isLoggedIn ? (
                  <ProfileIcon onClick={toggleProfileDrawer} /> // Toggle profile drawer
                ) : (
                  <Button variant="contained">로그인</Button>
                )}
              </Box>

              {/* Drawer for Mobile Navigation */}
              <MobileDrawer open={navDrawerOpen} onClose={closeNavDrawer} links={navLinks} />

              {/* Drawer for Profile Links */}
              <MobileDrawer open={profileDrawerOpen} onClose={closeProfileDrawer} links={profileLinks} />
            </>
          ) : (
            <>
              {/* Logo and Title */}
              <Box sx={{ display: "flex", alignItems: "center", ml: "100px" }}>
                <Image src="/images/logo.png" alt="Gachi.live logo" width={40} height={40} />
                <Box
                  component="h6"
                  sx={{
                    fontSize: theme.typography.h6.fontSize,
                    marginLeft: "10px",
                    fontFamily: theme.typography.h6.fontFamily,
                  }}
                >
                  Gachi.live
                </Box>
              </Box>

              {/* Menu Links */}
              <Box sx={{ display: "flex", alignItems: "center", marginY: "0px" }}>
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    passHref
                    style={{
                      textDecoration: "none",
                      color: theme.palette.text.primary,
                      marginRight: index === navLinks.length - 1 ? "50px" : "20px",
                      fontSize: theme.typography.body1.fontSize,
                      transition: "color 0.3s",
                      padding: "0 5px",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = theme.palette.text.secondary)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = theme.palette.text.primary)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Conditional Icons/Buttons for Logged-in State */}
                {isLoggedIn ? (
                  <>
                    {/* Notifications Icon Button */}
                    <IconButton
                      sx={{
                        backgroundColor: "transparent",
                        borderRadius: "8px",
                        width: "40px",
                        height: "40px",
                        padding: "4px",
                        marginRight: "20px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        "&:hover": {
                          backgroundColor: theme.palette.action.hover,
                        },
                      }}
                    >
                      <NotificationsOutlinedIcon
                        sx={{
                          fontSize: "24px",
                          color: theme.palette.text.primary,
                          strokeWidth: 1.5,
                        }}
                      />
                    </IconButton>

                    {/* Profile Icon with dropdown menu */}
                    <ProfileIcon onClick={handleProfileMenuOpen} />

                    {/* User Menu (Dropdown) */}
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleProfileMenuClose}
                      sx={{
                        marginTop: "5px",
                        borderRadius: "8px",
                      }}
                    >
                      {profileLinks.map((link) => (
                        <MenuItem key={link.href} onClick={handleProfileMenuClose} component={Link} href={link.href}>
                          {link.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ) : (
                  <>
                    {/* "Sign up" link and "Login" button for Logged-out State */}
                    <Box sx={{ display: "flex", alignItems: "center", marginRight: "50px" }}>
                      <Link
                        href="/signup"
                        passHref
                        style={{
                          textDecoration: "none",
                          color: theme.palette.text.primary,
                          fontSize: theme.typography.body1.fontSize,
                          marginRight: "20px",
                          transition: "color 0.3s",
                          padding: "0 5px",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = theme.palette.text.secondary)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = theme.palette.text.primary)}
                      >
                        회원가입
                      </Link>
                      <Button variant="contained">로그인</Button>
                    </Box>
                  </>
                )}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
