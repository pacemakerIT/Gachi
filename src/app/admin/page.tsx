'use client';
import React from 'react';
import AdminNavBar from './components/admin-nav-bar';
import AdminHeader from './components/admin-header';
import AdminContent from './components/admin-content';
import { Box } from '@mui/material';

const AdminDashboard: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <AdminNavBar />
      <Box sx={{ flexGrow: 1 }}>
        <AdminHeader
          anchorEl={anchorEl}
          handleMenuOpen={handleMenuOpen}
          handleMenuClose={handleMenuClose}
        />
        <AdminContent />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
