'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

interface ManageMenuProps {
  userId: number;
}

const ManageMenu: React.FC<ManageMenuProps> = ({ userId }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteUser = async () => {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
      });
      if (response.ok) console.log(`User with ID ${userId} deleted.`);
      else console.error('Failed to delete user');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setDeleteDialogOpen(false);
    }
  };

  return (
    <>
      <IconButton onClick={handleMenuOpen}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            borderRadius: '12px',
          },
        }}
      >
        <MenuItem onClick={() => setDeleteDialogOpen(true)}>
          <DeleteOutlineOutlinedIcon />
          회원삭제
        </MenuItem>
        <MenuItem>
          <EditOutlinedIcon />
          회원정보수정
        </MenuItem>
      </Menu>
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: '12px',
          },
        }}
      >
        <DialogContent>
          <DialogContentText
            sx={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 2,
            }}
          >
            정말 삭제하시겠습니까?
          </DialogContentText>
          <DialogActions
            sx={{
              display: 'flex',
              flexDirection: 'row', // Align buttons horizontally
              justifyContent: 'center', // Center buttons horizontally
              gap: 2, // Add space between buttons
              width: '100%', // Ensure full width of the dialog
              padding: 0, // Remove any default padding that may cause misalignment
            }}
          >
            <Button
              onClick={handleDeleteUser}
              color="error"
              variant="contained"
              sx={{
                borderRadius: '12px',
                boxShadow: 'none',
                textTransform: 'none',
                minWidth: '80px', // Set a consistent minimum width
              }}
            >
              삭제
            </Button>
            <Button
              onClick={() => setDeleteDialogOpen(false)}
              variant="contained"
              sx={{
                backgroundColor: '#f5f5f5',
                color: '#000',
                borderRadius: '12px',
                boxShadow: 'none',
                textTransform: 'none',
                minWidth: '80px', // Set a consistent minimum width
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            >
              취소
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ManageMenu;
