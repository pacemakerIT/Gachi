'use client';

import React, { useState } from 'react';
import { Button, Popover, Stack, Box } from '@mui/material';

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
    handleClose();
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
            minWidth: 100,
            padding: 0,
          },
        }}
      >
        <Box p="4px 8px">
          <Stack direction="column" spacing={0.5}>
            <Button
              variant="text"
              onClick={() => handleSelectRole('멘토')}
              sx={{ color: 'white' }}
            >
              멘토
            </Button>
            <Button
              variant="text"
              onClick={() => handleSelectRole('멘티')}
              sx={{ color: 'white' }}
            >
              멘티
            </Button>
          </Stack>
        </Box>
      </Popover>
    </>
  );
};

export default MentorMenteeButton;
