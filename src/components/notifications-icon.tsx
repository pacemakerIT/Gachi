import React from 'react';
import { IconButton } from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { useTheme } from '@mui/material/styles';

const NotificationsIcon: React.FC = () => {
  const theme = useTheme();

  return (
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
          strokeWidth: 1.5,
        }}
      />
    </IconButton>
  );
};

export default NotificationsIcon;
