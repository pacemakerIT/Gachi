'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Checkbox,
  ListItemIcon,
  ListItemText,
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
  const [checkedItems, setCheckedItems] = useState({
    delete: false,
    edit: false,
  });

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
      setCheckedItems((prev) => ({ ...prev, delete: false }));
    }
  };

  const handleCheckboxChange = (action: 'delete' | 'edit') => {
    setCheckedItems((prev) => ({
      ...prev,
      [action]: !prev[action],
    }));
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
      >
        <MenuItem disabled={!checkedItems.delete}>
          <ListItemIcon>
            <Checkbox
              checked={checkedItems.delete}
              onChange={() => handleCheckboxChange('delete')}
              onClick={(e) => e.stopPropagation()} // Ensure only the checkbox is interactive
            />
          </ListItemIcon>
          <ListItemText primary="회원삭제" />
          <DeleteOutlineOutlinedIcon />
        </MenuItem>
        <MenuItem disabled={!checkedItems.edit}>
          <ListItemIcon>
            <Checkbox
              checked={checkedItems.edit}
              onChange={() => handleCheckboxChange('edit')}
              onClick={(e) => e.stopPropagation()} // Ensure only the checkbox is interactive
            />
          </ListItemIcon>
          <ListItemText primary="회원정보수정" />
          <EditOutlinedIcon />
        </MenuItem>
      </Menu>
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Delete User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This action is irreversible. Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>No</Button>
          <Button onClick={handleDeleteUser} color="error" variant="contained">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ManageMenu;
