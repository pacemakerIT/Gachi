'use client';

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
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
import { UserType } from '@/utils/types';

interface User {
  id: number;
  name: string;
  email: string;
  linkedin: string;
  region: string;
  program: string;
  matchStatus: 'Matched' | 'Unmatched';
}

const initialRows: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    linkedin: 'linkedin.com/johndoe',
    region: 'Seoul',
    program: 'IT Program',
    matchStatus: 'Matched',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    linkedin: 'linkedin.com/janesmith',
    region: 'Busan',
    program: 'Design Program',
    matchStatus: 'Unmatched',
  },
];

const UsersPage: React.FC = () => {
  const [mockrows, setmockRows] = useState<User[]>(initialRows);
  const [message, setMessage] = useState<string | null>(null);
  const [data, setData] = useState<UserType[]>();
  const [filter, setFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [newUser, setNewUser] = useState<User>({
    id: mockrows.length + 1,
    name: '',
    email: '',
    linkedin: '',
    region: '',
    program: '',
    matchStatus: 'Unmatched',
  });
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/dashboard/admin_user_api/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        if (error instanceof Error) {
          setMessage(error.message);
        } else {
          setMessage('An unknown error occurred.');
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {}, [data]);

  useEffect(() => {
    if (message) {
      if (message.includes('successfully')) {
        toast.success(message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error(message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  }, [message]);

  const handleUserUpdate = (
    userId: string,
    userData: {
      firstName: string;
      lastName: string;
      email: string;
      linkedInUrl: string;
      region: string;
      industryTitle: string;
    }
  ) => {
    // Update the user in local state
    setData((prevData) =>
      prevData?.map((user) =>
        user.userId === userId ? { ...user, ...userData } : user
      )
    );
  };

  const handleUserDelete = (userId: string) => {
    // Delete the user in local state
    setData((prevData) => prevData?.filter((user) => user.userId !== userId));
  };

  const rows = data?.map((item, index) => ({
    id: index + 1, // 고유한 ID를 index로 설정
    name: item.firstName + ' ' + item.lastName,
    ...item, // 기존 데이터 포함
  }));

  // Filtered and searched rows
  // const filteredData = data?.filter((user: UserType) => {
  //   const matchesFilter = filter === 'All';
  //   const matchesSearch =
  //     user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     user.userId.toString().includes(searchQuery);

  //   return matchesFilter && matchesSearch;
  // });
  // const filteredRows = rows.filter((row) => {
  //   const matchesFilter = filter === 'All' || row.matchStatus === filter;
  //   const matchesSearch =
  //     row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     row.id.toString().includes(searchQuery);

  //   return matchesFilter && matchesSearch;
  // });

  const handleDialogOpen = () => {
    setNewUser({
      id: rows?.length ? rows.length + 1 : 1,
      name: '',
      email: '',
      linkedin: '',
      region: '',
      program: '',
      matchStatus: 'Unmatched',
    });
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleUserAdd = () => {
    setmockRows((prevRows) => [...prevRows, newUser]);
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
      renderCell: (params) => (
        <MentorMenteeButton
          userId={params.row.userId}
          userTypeId={params.row.userTypeId}
        />
      ),
    },
    { field: 'name', headerName: '이름', width: 150 },
    { field: 'email', headerName: '이메일', width: 200 },
    { field: 'linkedInUrl', headerName: '링크드인', width: 200 },
    { field: 'region', headerName: '지역', width: 120 },
    { field: 'industryTitle', headerName: '프로그램', width: 150 },
    { field: 'matchStatus', headerName: '매칭현황', width: 120 },
    {
      field: 'memo',
      headerName: '메모',
      width: 100,
      renderCell: (params) => (
        <MemoDialog
          userId={params.row.userId}
          initialNote={params.row.memo || ''}
        />
      ),
    },
    {
      field: 'manage',
      headerName: '관리',
      width: 100,
      renderCell: (params) => (
        <ManageMenu
          userId={params.row.userId}
          userData={{
            firstName: params.row.firstName,
            lastName: params.row.lastName,
            email: params.row.email,
            linkedInUrl: params.row.linkedInUrl,
            region: params.row.region,
            industryTitle: params.row.industryTitle,
          }}
          onUserUpdate={handleUserUpdate}
          onUserDelete={handleUserDelete}
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
            rows={rows}
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
