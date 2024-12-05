'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  MenuItem,
  Select,
  IconButton,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import MemoDialog from './components/memo-dialogue';
import ManageMenu from './components/manage-menu';
import MentorMenteeButton from './components/mentor-mentee-button';

interface User {
  id: number;
  name: string;
  email: string;
  linkedin: string;
  location: string;
  program: string;
  matchStatus: 'Matched' | 'Unmatched';
}

const initialRows: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    linkedin: 'linkedin.com/johndoe',
    location: 'Seoul',
    program: 'IT Program',
    matchStatus: 'Matched',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    linkedin: 'linkedin.com/janesmith',
    location: 'Busan',
    program: 'Design Program',
    matchStatus: 'Unmatched',
  },
];

const UsersPage: React.FC = () => {
  const [rows, setRows] = useState<User[]>(initialRows);
  const [filter, setFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [newUser, setNewUser] = useState<User>({
    id: rows.length + 1,
    name: '',
    email: '',
    linkedin: '',
    location: '',
    program: '',
    matchStatus: 'Unmatched',
  });

  // Filtered and searched rows
  const filteredRows = rows.filter((row) => {
    const matchesFilter = filter === 'All' || row.matchStatus === filter;
    const matchesSearch =
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.id.toString().includes(searchQuery);

    return matchesFilter && matchesSearch;
  });

  const handleDialogOpen = () => {
    setNewUser({
      id: rows.length + 1,
      name: '',
      email: '',
      linkedin: '',
      location: '',
      program: '',
      matchStatus: 'Unmatched',
    });
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleUserAdd = () => {
    setRows((prevRows) => [...prevRows, newUser]);
    setDialogOpen(false);
  };

  const handleInputChange = (field: keyof User, value: string) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

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
        <MemoDialog userId={params.row.id} initialNote="" />
      ),
    },
    {
      field: 'manage',
      headerName: '관리',
      width: 100,
      renderCell: (params) => (
        <ManageMenu
          userId={params.row.id}
          userData={{
            name: '',
            email: '',
            linkedIn: '',
            region: '',
            program: '',
          }}
          onUserUpdate={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
  ];

  return (
    <Card>
      <CardContent>
        {/* Top Bar */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6">회원 관리</Typography>

          {/* Right-Side Controls */}
          <Stack direction="row" spacing={2} alignItems="center">
            {/* Search Bar */}
            <TextField
              size="small"
              placeholder="Search by Name or ID"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ backgroundColor: 'white', borderRadius: '4px', width: 200 }}
            />

            {/* Filter Dropdown */}
            <Select
              size="small"
              value={filter}
              displayEmpty
              onChange={(e) => setFilter(e.target.value)}
              sx={{ backgroundColor: 'white', borderRadius: '4px', width: 150 }}
            >
              <MenuItem value="" disabled>
                Filter
              </MenuItem>
              <MenuItem value="Matched">Matched</MenuItem>
              <MenuItem value="Unmatched">Unmatched</MenuItem>
              <MenuItem value="All">All</MenuItem>
            </Select>

            {/* Share Icon */}
            <IconButton>
              <IosShareOutlinedIcon />
            </IconButton>

            {/* Add User Button */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleDialogOpen}
            >
              <PersonAddAlt1OutlinedIcon />
            </Button>
          </Stack>
        </Box>

        {/* Data Grid */}
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            checkboxSelection
          />
        </Box>
      </CardContent>

      {/* Add User Dialog */}
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>New User</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            value={newUser.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={newUser.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <TextField
            fullWidth
            label="LinkedIn"
            margin="normal"
            value={newUser.linkedin}
            onChange={(e) => handleInputChange('linkedin', e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleUserAdd} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default UsersPage;
