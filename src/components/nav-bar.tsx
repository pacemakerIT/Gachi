"use client";

import * as React from 'react';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

interface Props {}

const NavBar: React.FC<Props> = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();

  const handleDropDownClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropDownClose = () => {
    setAnchorEl(null);
  };

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
      <Box sx={{ backgroundColor: theme.palette.secondary.main, height: '25px', width: '100%' }} />

      {/* AppBar */}
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between', maxHeight: '20px' }}>
          {/* Logo and Title */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: '100px' }}>
            <Image src="/images/logo.png" alt="Gachi.live logo" width={40} height={40} />
            <Box
              component="h6"
              sx={{
                fontSize: theme.typography.h6.fontSize,
                marginLeft: '10px',
                fontFamily: theme.typography.h6.fontFamily,
              }}
            >
              Gachi.live
            </Box>
          </Box>

          {/* Menu Links */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginY: '0px' }}>
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                passHref
                style={{
                  textDecoration: 'none',
                  color: theme.palette.text.primary,
                  marginRight: index === navLinks.length - 1 ? '50px' : '20px',
                  fontSize: theme.typography.body1.fontSize,
                  transition: 'color 0.3s',
                  padding: '0 5px',
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
                    backgroundColor: 'transparent',
                    borderRadius: '8px',
                    width: '40px',
                    height: '40px',
                    padding: '4px',
                    marginRight: '20px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                >
                  <NotificationsOutlinedIcon
                    sx={{
                      fontSize: '24px',
                      color: theme.palette.text.primary,
                      strokeWidth: 1.5, // Adjust stroke width for consistency
                    }}
                  />
                </IconButton>

                {/* Profile Icon with square size and drop shadow */}
                <IconButton
                  color="inherit"
                  onClick={handleDropDownClick}
                  sx={{
                    backgroundColor: 'transparent',
                    borderRadius: '8px',
                    width: '40px',
                    height: '40px',
                    padding: '4px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                >
                  {/* Custom Profile Icon (two ovals) */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box
                      sx={{
                        width: '9px',
                        height: '9px',
                        border: `2px solid ${theme.palette.text.primary}`, // Adjust border thickness
                        borderRadius: '50%',
                        marginBottom: '2px',
                      }}
                    />
                    <Box
                      sx={{
                        width: '15px',
                        height: '9px',
                        border: `2px solid ${theme.palette.text.primary}`, // Adjust border thickness
                        borderRadius: '50%',
                      }}
                    />
                  </Box>
                </IconButton>

                {/* User Menu */}
                <Menu
                  id="user-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleDropDownClose}
                  sx={{
                    marginTop: '5px', // Lower the menu by 5px
                    borderRadius: '8px', // Round off the edges
                  }}
                >
                  {profileLinks.map((link) => (
                    <MenuItem key={link.href} onClick={handleDropDownClose} component={Link} href={link.href}>
                      <Box
                        sx={{
                          textDecoration: 'none',
                          color: theme.palette.text.primary,
                          fontSize: theme.typography.body1.fontSize,
                          transition: 'color 0.3s',
                          padding: '0 5px',
                          '&:hover': {
                            color: theme.palette.text.secondary,
                          },
                        }}
                      >
                        {link.label}
                      </Box>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <>
                <Link
                  href="/signup"
                  passHref
                  style={{
                    textDecoration: 'none',
                    color: theme.palette.text.primary,
                    marginRight: '20px',
                    fontSize: theme.typography.body1.fontSize,
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = theme.palette.text.secondary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = theme.palette.text.primary)}
                >
                  회원가입
                </Link>
                <Button variant="contained">로그인</Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
