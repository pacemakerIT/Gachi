"use client";

import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, Menu, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles'; // Import Theme for JSS-like styling
import Link from 'next/link';

interface Props {
  // Add props if needed
}

const useStyles = makeStyles((theme: Theme) => ({
  topBar: {
    backgroundColor: '#101010',
    height: 25, // Set the height to 25px
    width: '100%',
  },
  appBar: {
    backgroundColor: '#F9F9FB', // Set background color to #F9F9FB
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Add drop shadow at the bottom
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: theme.spacing(1),
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#101010', // Set "Gachi.live" text to black
  },
  menuContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
  link: {
    fontSize: 16,
    color: '#101010',
    textDecoration: 'none',
    '&:hover': {
      color: '#2986FE', // Optional hover color
    },
    marginRight: 10, // Set gap between Home, Events, Mentors, Pages, About to 10px
  },
  noUnderline: {
    textDecoration: 'none !important', // Ensure no underline for anchor links
  },
  aboutLink: {
    marginRight: 45, // Set gap between About and Sign Up to 45px
  },
  signUpLink: {
    marginRight: 10, // Set gap between Sign Up and Login to 10px
  },
  loginButton: {
    backgroundColor: '#2986FE',
    color: '#FFFFFF',
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    textTransform: 'none',
  },
  bellButton: {
    color: '#101010',
  },
  userIconContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(2),
  },
  userIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    marginRight: theme.spacing(1),
  },
}));

const NavBar: React.FC<Props> = () => {
  const classes = useStyles();
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
      <div className={classes.topBar}></div>

      {/* AppBar */}
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid container alignItems="center">
            {/* Logo and Title (left side) */}
            <Grid item xs={6}>
              <div className={classes.logoContainer}>
              <img src="/images/logo.png" alt="Gachi.live logo" className={classes.logo} />
                <Typography variant="h6" className={classes.title}>
                  Gachi.live
                </Typography>
              </div>
            </Grid>

            {/* Menu Items (right side) */}
            <Grid item xs={6} className={classes.menuContainer}>
              <Link
                href={{
                  pathname: '/',
                  query: { name: 'home' },
                }}
                passHref
              >
                <a className={`${classes.link} ${classes.noUnderline}`}>Home</a>
              </Link>
              <Link
                href={{
                  pathname: '/Events',
                  query: { name: '이벤트' },
                }}
                passHref
              >
                <a className={`${classes.link} ${classes.noUnderline}`}>이벤트</a>
              </Link>
              <Link
                href={{
                  pathname: '/Mentors',
                  query: { name: '멘토' },
                }}
                passHref
              >
                <a className={`${classes.link} ${classes.noUnderline}`}>멘토</a>
              </Link>
              <Link
                href={{
                  pathname: '/Pages',
                  query: { name: '페이지' },
                }}
                passHref
              >
                <a className={`${classes.link} ${classes.noUnderline}`}>페이지</a>
              </Link>
              <Link
                href={{
                  pathname: '/about',
                  query: { name: 'about' },
                }}
                passHref
              >
                <a className={`${classes.link} ${classes.aboutLink} ${classes.noUnderline}`}>About</a>
              </Link>
              {!isLoggedIn ? (
                <>
                  <Link
                    href={{
                      pathname: '/signup',
                      query: { name: 'signup' },
                    }}
                    passHref
                  >
                    <a className={`${classes.link} ${classes.signUpLink} ${classes.noUnderline}`}>Sign up</a>
                  </Link>
                  <Button className={classes.loginButton}>Login</Button>
                </>
              ) : (
                <>
                  <IconButton className={classes.bellButton}>
                    <i className="fas fa-bell" />
                  </IconButton>
                  <div className={classes.userIconContainer}>
                    <div className={classes.userIcon}>
                      <i className="fas fa-user" />
                    </div>
                    <IconButton
                      className={classes.bellButton}
                      aria-controls="user-menu"
                      aria-haspopup="true"
                      onClick={handleDropDownClick}
                    >
                      <i className="fas fa-caret-down" />
                    </IconButton>
                    <Menu
                      id="user-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleDropDownClose}
                    >
                      <MenuItem onClick={handleDropDownClose}>
                        <Link href="#" passHref>
                          <a className={classes.noUnderline}>Edit profile</a>
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleDropDownClose}>
                        <Link href="#" passHref>
                          <a className={classes.noUnderline}>Sign out</a>
                        </Link>
                      </MenuItem>
                    </Menu>
                  </div>
                </>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
