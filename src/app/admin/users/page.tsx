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
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import MemoDialog from './components/memo-dialogue';
import ManageMenu from './components/manage-menu';
import MentorMenteeButton from './components/mentor-mentee-button';
import AddUserDialog from './components/users-dialogue';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  location: string;
  program: string;
  matchStatus: 'Matched' | 'Unmatched';
}

const initialRows: User[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    linkedin: 'linkedin.com/johndoe',
    location: 'Seoul',
    program: 'IT Program',
    matchStatus: 'Matched',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
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

  // Calculate the next user ID
  const nextUserId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 1;

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleUserAdd = (newUser: User) => {
    setRows((prevRows) => [...prevRows, newUser]);
    setDialogOpen(false);
  };

  const filteredRows = rows.filter((row) => {
    const matchesFilter = filter === 'All' || row.matchStatus === filter;
    const matchesSearch =
      `${row.firstName} ${row.lastName}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      row.id.toString().includes(searchQuery);

    return matchesFilter && matchesSearch;
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'mentorMentee',
      headerName: '멘토/멘티',
      width: 120,
      renderCell: () => <MentorMenteeButton />,
    },
    {
      field: 'name',
      headerName: '이름',
      width: 150,
      renderCell: (params) => `${params.row.firstName} ${params.row.lastName}`,
    },
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
          onUserUpdate={() => {}}
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
            <TextField
              size="small"
              placeholder="Search by Name or ID"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ backgroundColor: 'white', borderRadius: '4px', width: 200 }}
            />

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

            <IconButton
              onClick={() => {
                // Create CSV content
                const headers = [
                  'ID',
                  'Name',
                  'Email',
                  'LinkedIn',
                  'Location',
                  'Program',
                  'Match Status',
                ];
                const csvContent =
                  'data:text/csv;charset=utf-8,' +
                  [
                    headers,
                    ...rows.map((row) => [
                      row.id,
                      `${row.firstName} ${row.lastName}`, // Assuming firstName and lastName
                      row.email,
                      row.linkedin,
                      row.location,
                      row.program,
                      row.matchStatus,
                    ]),
                  ]
                    .map((e) =>
                      e
                        .map(
                          (field) => `"${String(field).replace(/"/g, '""')}"` // Escape double quotes
                        )
                        .join(',')
                    )
                    .join('\n');

                // Encode URI
                const encodedUri = encodeURI(csvContent);

                // Create a temporary link element
                const link = document.createElement('a');
                link.setAttribute('href', encodedUri);
                link.setAttribute('download', 'users_data.csv');

                // Simulate a click to download the file
                document.body.appendChild(link); // Required for Firefox
                link.click();
                document.body.removeChild(link);
              }}
            >
              <IosShareOutlinedIcon />
            </IconButton>

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
      <AddUserDialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        onAddUser={handleUserAdd}
        nextUserId={nextUserId} // Pass nextUserId here
      />
    </Card>
  );
};

export default UsersPage;
