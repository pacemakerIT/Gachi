'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Popover,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  TextField,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

// Sample rows for demonstration purposes
const rows = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    linkedin: 'linkedin.com/johndoe',
    location: 'Seoul',
    program: 'IT Program',
    matchStatus: 'Matched',
  },
  // Add more rows as needed
];

// Column definitions
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'mentorMentee',
    headerName: '멘토/멘티',
    width: 120,
    renderCell: () => <MentorMenteeButton />,
  },
  { field: 'name', headerName: '이름', width: 150 },
  { field: 'email', headerName: '이메일', width: 200 },
  { field: 'linkedin', headerName: '링크드인', width: 200 },
  { field: 'location', headerName: '지역', width: 120 },
  { field: 'program', headerName: '프로그램', width: 150 },
  { field: 'matchStatus', headerName: '매칭현황', width: 120 },
  {
    field: 'memo',
    headerName: '메모',
    width: 100,
    renderCell: (params) => (
      <MemoDialog userId={params.row.id} initialNote={params.row.note} />
    ),
  },
  {
    field: 'manage',
    headerName: '관리',
    width: 100,
    renderCell: (params) => <ManageMenu userId={params.row.id} />,
  },
];

const MemoDialog: React.FC<{ userId: number; initialNote: string }> = ({
  userId,
  initialNote,
}) => {
  const [note, setNote] = useState(initialNote); // Track the note
  const [tempNote, setTempNote] = useState(initialNote); // Temporary state for edits
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUnsaved, setIsUnsaved] = useState(false);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    if (isUnsaved) {
      if (!window.confirm('You still have unsaved notes. Continue?')) return;
    }
    setIsDialogOpen(false);
    setTempNote(note); // Reset temp note to saved state
    setIsUnsaved(false);
  };

  const handleNoteSubmit = () => {
    // Simulate saving the note (you can replace this with an API call)
    console.log(`Note for user ${userId}:`, tempNote);
    setNote(tempNote);
    setIsUnsaved(false);
    setIsDialogOpen(false);
  };

  const handleNoteChange = (value: string) => {
    setTempNote(value);
    setIsUnsaved(value !== note); // Track unsaved changes
  };

  return (
    <>
      <IconButton onClick={handleDialogOpen}>
        <NoteAltOutlinedIcon />
      </IconButton>
      <Dialog open={isDialogOpen} onClose={handleDialogClose} fullWidth>
        <Box
          sx={{
            backgroundColor: '#2986FE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
            py: 1,
          }}
        >
          <Typography sx={{ color: 'white', fontWeight: 'bold' }}>
            유저노트
          </Typography>
          <IconButton onClick={handleDialogClose} sx={{ color: 'white' }}>
            <ClearOutlinedIcon />
          </IconButton>
        </Box>
        <DialogContent
          sx={{
            backgroundColor: '#f5f5f5',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              backgroundColor: '#e0e0e0',
              borderRadius: 1,
              px: 2,
              py: 1,
            }}
          >
            {note || 'No note available.'}
          </Typography>
          <TextField
            value={tempNote}
            onChange={(e) => handleNoteChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleNoteSubmit();
              }
            }}
            multiline
            fullWidth
            rows={4}
            variant="outlined"
            placeholder="Write your note here..."
            sx={{
              backgroundColor: 'white',
              borderRadius: 1,
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

// ManageMenu component for displaying the options
const ManageMenu: React.FC<{ userId: number }> = ({ userId }) => {
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
      if (response.ok) {
        console.log(`User with ID ${userId} deleted.`);
        // Update state to reflect deletion
      } else {
        console.error('Failed to delete user');
      }
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
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem
          onClick={() => {
            setDeleteDialogOpen(true);
            handleMenuClose();
          }}
        >
          <DeleteOutlineOutlinedIcon sx={{ mr: 1 }} />
          회원삭제
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <EditOutlinedIcon sx={{ mr: 1 }} />
          회원정보수정
        </MenuItem>
      </Menu>

      {/* Confirmation Dialog for Deleting User */}
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

// Button component for 멘토/멘티 selection with a popover and checkboxes
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

// Main component
const UsersPage: React.FC = () => {
  return (
    <Card
      sx={{
        flex: 1,
        minHeight: 150,
        width: '100%',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: 'none',
      }}
    >
      <CardContent>
        <Typography variant="h6">회원 관리</Typography>
        <Box sx={{ height: 400, width: '100%', marginTop: 2 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5 },
              },
            }}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default UsersPage;
