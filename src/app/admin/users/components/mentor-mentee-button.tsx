'use client';

import React, { useState } from 'react';
import {
  Button,
  Popover,
  Stack,
  Box,
  Checkbox,
  ListItemText,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const MentorMenteeButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRole, setSelectedRole] = useState<string>('멘토');

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectRole = (role: string) => {
    setSelectedRole(role);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
        sx={{
          color: 'white',
          borderRadius: '12px',
          padding: '4px 8px',
          minWidth: '55px',
          height: '32px',
        }}
      >
        {selectedRole}
      </Button>
      <Popover
        id="role-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: {
            backgroundColor: '#2986FE',
            borderRadius: 2,
            minWidth: 60,
            padding: '8px 12px',
          },
        }}
      >
        <Box>
          <Stack direction="column" spacing={1}>
            {['멘토', '멘티'].map((role) => (
              <Box
                key={role}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Checkbox
                  checked={selectedRole === role}
                  onChange={() => handleSelectRole(role)}
                  icon={
                    <Box
                      sx={{
                        width: 18,
                        height: 18,
                        border: '2px solid white',
                        borderRadius: '4px',
                        backgroundColor: 'white',
                      }}
                    />
                  }
                  checkedIcon={
                    <Box
                      sx={{
                        width: 18,
                        height: 18,
                        border: '2px solid white',
                        borderRadius: '4px',
                        backgroundColor: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <CheckIcon sx={{ fontSize: 14, color: 'white' }} />
                    </Box>
                  }
                  sx={{ padding: 0 }}
                />
                <ListItemText
                  primary={role}
                  sx={{ color: 'white', marginLeft: '8px' }}
                />
              </Box>
            ))}
          </Stack>
        </Box>
      </Popover>
    </>
  );
};

export default MentorMenteeButton;
