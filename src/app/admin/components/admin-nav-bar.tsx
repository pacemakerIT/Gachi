'use client';
import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { menuItems } from './mock-data';

const drawerWidth = 240;

const AdminNavBar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: 'white',
          border: 'none',
        },
      }}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            component="button"
            key={index}
            sx={{
              backgroundColor: 'white',
              borderRadius: '4px',
              mb: index === 0 ? 2 : 1,
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AdminNavBar;
