'use client';

import React from 'react';
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
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import MemoDialog from './components/memo-dialogue';
import ManageMenu from './components/manage-menu';
import MentorMenteeButton from './components/mentor-mentee-button';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';

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
  {
    id: 2,
    name: 'John Doe2',
    email: 'john2@example.com',
    linkedin: 'linkedin.com/johndoe2',
    location: 'Seoul',
    program: 'IT Program',
    matchStatus: 'Unmatched',
  },
];

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
    renderCell: (params) => <ManageMenu userId={params.row.id} />,
  },
];

const UsersPage: React.FC = () => (
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
            sx={{
              backgroundColor: 'white',
              borderRadius: '4px',
              width: 200,
            }}
          />

          {/* Filter Dropdown */}
          <Select
            size="small"
            defaultValue=""
            displayEmpty
            sx={{
              backgroundColor: 'white',
              borderRadius: '4px',
              width: 150,
            }}
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
          <Button variant="contained" color="primary">
            <PersonAddAlt1OutlinedIcon />
          </Button>
        </Stack>
      </Box>

      {/* Data Grid */}
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          checkboxSelection
        />
      </Box>
    </CardContent>
  </Card>
);

export default UsersPage;
