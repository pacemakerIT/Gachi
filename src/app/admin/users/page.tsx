'use client';

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import MemoDialog from './components/memo-dialogue';
import ManageMenu from './components/manage-menu';
import MentorMenteeButton from './components/mentor-mentee-button';

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
      <Typography variant="h6">회원 관리</Typography>
      <Box sx={{ height: 400, width: '100%', marginTop: 2 }}>
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
