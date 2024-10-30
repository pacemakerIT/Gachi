'use client';
import React, { useState } from 'react'; // Import useState
import { Box, Button } from '@mui/material';
import AdminHeader from './admin-header';
import AdminNavBar from './admin-nav-bar';

const AdminContent: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // State for dropdown
  const [showSidebar, setShowSidebar] = useState(true); // State to toggle sidebar visibility

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {showSidebar && <AdminNavBar />} {/* Conditionally render the sidebar */}
      <Box sx={{ flex: 1 }}>
        <AdminHeader
          anchorEl={anchorEl}
          handleMenuOpen={handleMenuOpen}
          handleMenuClose={handleMenuClose}
        />
        <Button onClick={toggleSidebar}>
          {showSidebar ? 'Hide Sidebar' : 'Show Sidebar'}
        </Button>
      </Box>
    </Box>
  );
};

export default AdminContent;
