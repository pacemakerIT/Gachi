'use client';
import React, { useState } from 'react'; // Import useState
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface AdminHeaderProps {
  anchorEl: null | HTMLElement;
  handleMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleMenuClose: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({
  anchorEl,
  handleMenuOpen,
  handleMenuClose,
}) => {
  const [searchInput, setSearchInput] = useState(''); // State for search input

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ color: 'black', ml: 2 }}>
          Dashboard
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '50%' }}>
          <InputBase
            placeholder="Search…"
            value={searchInput} // Bind the input value to state
            onChange={(e) => setSearchInput(e.target.value)} // Update state on change
            sx={{
              ml: 1,
              flex: 1,
              color: 'black',
              backgroundColor: '#f1f1f1',
              borderRadius: 1,
              px: 2,
            }}
          />
          <IconButton>
            <NotificationsIcon sx={{ color: 'black' }} />
          </IconButton>
          <IconButton>
            <IosShareOutlinedIcon sx={{ color: 'black' }} />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
            <Avatar
              src="https://example.com/avatar.jpg" // Replace with actual image URL
              alt="User  Avatar"
              sx={{ width: 32, height: 32 }}
            />
            <IconButton onClick={handleMenuOpen}>
              <ArrowDropDownIcon sx={{ color: 'black' }} />
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Back to Home Page</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
