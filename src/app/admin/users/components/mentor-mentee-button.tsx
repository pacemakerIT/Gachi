'use client';

import React, { useEffect, useState } from 'react';
import {
  Button,
  Popover,
  Stack,
  Box,
  Checkbox,
  ListItemText,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

interface MentorMenteeButtonProps {
  userId: number;
  userTypeId: string;
}
const MentorMenteeButton: React.FC<MentorMenteeButtonProps> = ({
  userId,
  userTypeId,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRole, setSelectedRole] = useState<string>('');
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectRole = async (role: string) => {
    try {
      const response = await fetch(
        `${baseUrl}/dashboard/edit_user_type/?user_id=${userId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(role),
        }
      );

      if (response.ok) {
        alert('User type updated successfully.');
        // onUserUpdate(); // Refresh parent data
        setSelectedRole(role);
      } else {
        alert('Failed to update the user. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    if (userTypeId === '292d2be9-5ce5-4a7b-b5e2-cd412bed268b')
      setSelectedRole('멘티');
    else setSelectedRole('멘토');
  }, []);

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
