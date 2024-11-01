'use client';

import React, { useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import MobileDrawer from './mobile-drawer';
import ProfileIcon from './profile-icon';
import Logo from './logo';

const NavBar: React.FC = () => {
  const [isLoggedIn] = React.useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = React.useState(false);
  const [profileDrawerOpen, setProfileDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const prevIsMobile = React.useRef(isMobile);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const closeNavDrawer = () => {
    setNavDrawerOpen(false);
  };

  const toggleProfileDrawer = () => {
    setProfileDrawerOpen(!profileDrawerOpen);
    if (navDrawerOpen) {
      setNavDrawerOpen(false);
    }
  };

  const closeProfileDrawer = () => {
    setProfileDrawerOpen(false);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    if (navDrawerOpen) {
      setNavDrawerOpen(false);
    }
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (prevIsMobile.current !== isMobile) {
      setProfileDrawerOpen(false);
      setAnchorEl(null);
    }
    prevIsMobile.current = isMobile;
  }, [isMobile]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/Programs', label: '프로그램' },
    { href: '/Mentors', label: '멘토' },
    { href: '/Pages', label: '페이지' },
    { href: '/about', label: 'About' },
  ];

  const profileLinks = [
    { href: '/profile', label: 'Profile' },
    { href: '/myMentors', label: 'My Mentors' },
    { href: '/myPrograms', label: 'My Programs' },
    { href: '/logout', label: 'Logout' },
  ];

  return (
    <>
      {/* Top Black Bar */}
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.main,
          height: '25px',
          width: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: theme.zIndex.drawer + 2,
        }}
      />

      {/* AppBar with fixed position */}
      <AppBar
        position="fixed"
        sx={{
          top: '25px',
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: theme.palette.info.main,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', maxHeight: '20px' }}>
          {isMobile ? (
            <>
              {/* Hamburger Icon for Mobile View */}
              <IconButton
                sx={{ color: theme.palette.secondary.main }}
                onClick={toggleNavDrawer}
              >
                <MenuIcon />
              </IconButton>

              {/* Logo and Title in the center */}
              <Logo isMobile={isMobile} />

              {/* Profile Icon or Login Button on the Right */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {isLoggedIn ? (
                  <ProfileIcon onClick={toggleProfileDrawer} />
                ) : (
                  <Link href="/login" passHref>
                    <Button variant="contained">로그인</Button>
                  </Link>
                )}
              </Box>

              {/* Drawer for Mobile Navigation */}
              <MobileDrawer
                open={navDrawerOpen}
                onClose={closeNavDrawer}
                links={navLinks}
                anchor="left"
              />

              {/* Drawer for Profile Links */}
              <MobileDrawer
                open={profileDrawerOpen}
                onClose={closeProfileDrawer}
                links={profileLinks}
                anchor="right"
              />
            </>
          ) : (
            <>
              {/* Logo and Title */}
              <Box sx={{ display: 'flex', alignItems: 'center', ml: '100px' }}>
                <Logo isMobile={isMobile} />
              </Box>

              {/* Menu Links */}
              <Box
                sx={{ display: 'flex', alignItems: 'center', marginY: '0px' }}
              >
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    passHref
                    style={{
                      textDecoration: 'none',
                      color: theme.palette.text.primary,
                      marginRight:
                        index === navLinks.length - 1 ? '50px' : '20px',
                      fontSize: theme.typography.body1.fontSize,
                      padding: '0 5px',
                    }}
                  >
                    <Box
                      sx={{
                        transition: 'color 0.3s',
                        padding: '10px',
                        borderRadius: '4px',
                        '&:hover, &:active': {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {link.label}
                    </Box>
                  </Link>
                ))}

                {/* Conditional Icons/Buttons for Logged-in State */}
                {isLoggedIn ? (
                  <>
                    {/* Notifications Icon Button */}
                    <IconButton
                      sx={{
                        backgroundColor: 'transparent',
                        borderRadius: '8px',
                        width: '40px',
                        height: '40px',
                        padding: '4px',
                        marginRight: '20px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        '&:hover, &:active': {
                          backgroundColor: theme.palette.action.hover,
                          '& svg': {
                            color: `${theme.palette.background.default} !important`,
                          },
                        },
                      }}
                    >
                      <NotificationsOutlinedIcon
                        sx={{
                          fontSize: '24px',
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
                        marginTop: '5px',
                        borderRadius: '8px',
                      }}
                    >
                      {profileLinks.map((link) => (
                        <MenuItem
                          key={link.href}
                          onClick={handleProfileMenuClose}
                          component={Link}
                          href={link.href}
                        >
                          {link.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ) : (
                  <>
                    {/* "Sign up" link and "Login" button for Logged-out State */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '50px',
                      }}
                    >
                      <Link
                        href="/signup"
                        passHref
                        style={{
                          textDecoration: 'none',
                          color: theme.palette.text.primary,
                          fontSize: theme.typography.body1.fontSize,
                          marginRight: '20px',
                          padding: '0 5px',
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color =
                            theme.palette.primary.main)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color =
                            theme.palette.text.primary)
                        }
                      >
                        <Box
                          sx={{
                            transition: 'color 0.3s',
                            padding: '10px',
                            borderRadius: '4px',
                            '&:hover, &:active': {
                              color: theme.palette.primary.main,
                            },
                          }}
                        >
                          회원가입
                        </Box>
                      </Link>
                      <Link href="/login" passHref>
                        <Button variant="contained">로그인</Button>
                      </Link>
                    </Box>
                  </>
                )}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Add padding to prevent content from being hidden under the fixed navbar */}
      <Box sx={{ paddingTop: { xxs: '80px', md: '125px' } }} />
    </>
  );
};

export default NavBar;
