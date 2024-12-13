'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

interface ManageMenuProps {
  userId: number;
  userData: {
    firstName: string;
    lastName: string;
    email: string;
    linkedInUrl: string;
    region: string;
    industryTitle: string;
  };
  // setData: React.Dispatch<React.SetStateAction<[]>>;

  // onUserUpdate: () => void; // Callback to refresh data after updating
}

const ManageMenu: React.FC<ManageMenuProps> = ({
  userId,
  userData,
  // setData,
  // onUserUpdate,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    linkedInUrl: '',
    region: '',
    industryTitle: '',
  });
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // Initialize formData when userData changes
  useEffect(() => {
    if (userData) {
      setFormData({
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        email: userData.email || '',
        linkedInUrl: userData.linkedInUrl || '',
        region: userData.region || '',
        industryTitle: userData.industryTitle || '',
      });
    }
  }, [userData]);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteUser = async () => {
    try {
      const response = await fetch(
        `${baseUrl}/dashboard/delete_user/?user_id=${userId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        alert('User successfully deleted.');
        // setData((prevData) =>
        //   prevData.filter((item) => item.userId !== userId)
        // );
        // onUserUpdate(); // Refresh parent data
      } else {
        alert('Failed to delete the user. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setDeleteDialogOpen(false);
    }
  };

  const handleEditUser = async () => {
    try {
      const response = await fetch(
        `${baseUrl}/dashboard/edit_user/?user_id=${userId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert('User information updated successfully.');
        // onUserUpdate(); // Refresh parent data
        setEditDialogOpen(false);
      } else {
        alert('Failed to update the user. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      {/* Menu Button */}
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
        {/* Delete User */}
        <MenuItem onClick={() => setDeleteDialogOpen(true)}>
          <DeleteOutlineOutlinedIcon />
          회원삭제
        </MenuItem>

        {/* Edit User */}
        <MenuItem onClick={() => setEditDialogOpen(true)}>
          <EditOutlinedIcon />
          회원정보수정
        </MenuItem>
      </Menu>

      {/* Delete Confirmation Dialog */}
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
              justifyContent: 'center',
              gap: 2,
              padding: 0,
            }}
          >
            <Button
              onClick={handleDeleteUser}
              color="error"
              variant="contained"
              sx={{
                borderRadius: '12px',
                textTransform: 'none',
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

      {/* Edit User Dialog */}
      <Dialog
        open={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        PaperProps={{
          sx: { borderRadius: '12px' },
        }}
      >
        <DialogContent>
          <DialogContentText
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 2,
            }}
          >
            회원정보 수정
          </DialogContentText>
          <form>
            <TextField
              label="이름"
              value={formData.firstName}
              fullWidth
              margin="normal"
              onChange={(e) => handleInputChange('firstName', e.target.value)}
            />
            <TextField
              label="성"
              value={formData.lastName}
              fullWidth
              margin="normal"
              onChange={(e) => handleInputChange('lastName', e.target.value)}
            />
            <TextField
              label="이메일"
              value={formData.email}
              fullWidth
              margin="normal"
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            <TextField
              label="링크드인"
              value={formData.linkedInUrl}
              fullWidth
              margin="normal"
              onChange={(e) => handleInputChange('linkedInUrl', e.target.value)}
            />
            <TextField
              label="지역"
              value={formData.region}
              fullWidth
              margin="normal"
              onChange={(e) => handleInputChange('region', e.target.value)}
            />
            <TextField
              label="프로그램"
              value={formData.industryTitle}
              fullWidth
              margin="normal"
              onChange={(e) =>
                handleInputChange('industryTitle', e.target.value)
              }
            />
          </form>
          <DialogActions
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              padding: 0,
            }}
          >
            <Button
              onClick={handleEditUser}
              variant="contained"
              color="primary"
              sx={{
                borderRadius: '12px',
                textTransform: 'none',
              }}
            >
              저장
            </Button>
            <Button
              onClick={() => setEditDialogOpen(false)}
              variant="contained"
              sx={{
                backgroundColor: '#f5f5f5',
                color: '#000',
                borderRadius: '12px',
                '&:hover': { backgroundColor: '#e0e0e0' },
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
