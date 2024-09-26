"use client";

import * as React from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, Menu, MenuItem, Stack } from '@mui/material';
import Link from 'next/link';

interface Props {
  // Add props if needed
}

const NavBar: React.FC<Props> = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleDropDownClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropDownClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Top Black Bar */}
      <Box sx={{ backgroundColor: '#101010', height: '25px', width: '100%' }}></Box>

      {/* AppBar */}
      <AppBar position="static">
        <Toolbar>
          {/* Container for logo and menu items */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            {/* Logo and Title (left side) */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src="/images/logo.png" alt="Gachi.live logo" style={{ width: 30, height: 30, marginRight: '10px' }} />
              <h6>Gachi.live</h6>
            </Box>

            {/* Menu Items (right side) */}
            <Stack direction="row" spacing={3} alignItems="center">
              <Link
                href="/"
                style={{
                  textDecoration: 'none',
                  color: '#101010',
                  fontSize: '16px',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2986FE')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#101010')}
              >
                Home
              </Link>
              <Link
                href="/programs"
                style={{
                  textDecoration: 'none',
                  color: '#101010',
                  fontSize: '16px',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2986FE')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#101010')}
              >
                프로그램
              </Link>
              <Link
                href="/mentors"
                style={{
                  textDecoration: 'none',
                  color: '#101010',
                  fontSize: '16px',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2986FE')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#101010')}
              >
                멘토
              </Link>
              <Link
                href="/pages"
                style={{
                  textDecoration: 'none',
                  color: '#101010',
                  fontSize: '16px',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2986FE')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#101010')}
              >
                페이지
              </Link>
              <Link
                href="/about"
                style={{
                  textDecoration: 'none',
                  color: '#101010',
                  fontSize: '16px',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2986FE')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#101010')}
              >
                About
              </Link>

              {!isLoggedIn ? (
                <>
                  <Link
                    href="/signup"
                    style={{
                      textDecoration: 'none',
                      color: '#101010',
                      fontSize: '16px',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#2986FE')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#101010')}
                  >
                    Sign up
                  </Link>
                  <Button variant="contained">Login</Button>
                </>
              ) : (
                <>
                  <IconButton color="inherit">
                    <i className="fas fa-bell" />
                  </IconButton>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '16px' }}>
                    <IconButton color="inherit" aria-controls="user-menu" aria-haspopup="true" onClick={handleDropDownClick}>
                      <i className="fas fa-user" />
                    </IconButton>
                    <Menu id="user-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleDropDownClose}>
                      <MenuItem onClick={handleDropDownClose}>
                        <Link href="#">Edit profile</Link>
                      </MenuItem>
                      <MenuItem onClick={handleDropDownClose}>
                        <Link href="#">Sign out</Link>
                      </MenuItem>
                    </Menu>
                  </Box>
                </>
              )}
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
