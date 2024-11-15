'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Popover,
  FormControlLabel,
  Checkbox,
  IconButton,
  Stack,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';

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
    renderCell: () => (
      <IconButton>
        <NoteAltOutlinedIcon />
      </IconButton>
    ),
  },
  {
    field: 'manage',
    headerName: '관리',
    width: 100,
    renderCell: () => (
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    ),
  },
];

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
        sx={{ color: 'white' }}
      >
        {selectedRole}
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          sx: {
            backgroundColor: '#2986FE', // Blue background
            borderRadius: 2, // Rounded edges
            minWidth: 100, // Smaller width
            padding: 0.5, // Reduced padding for tighter spacing
          },
        }}
      >
        <Box p={2}>
          <Stack direction="column" spacing={1}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedRole === '멘토'}
                  onChange={() => handleSelectRole('멘토')}
                />
              }
              label="멘토"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedRole === '멘티'}
                  onChange={() => handleSelectRole('멘티')}
                />
              }
              label="멘티"
            />
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
