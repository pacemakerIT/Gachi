'use client';
import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { mentorData } from './mock-data'; // Import mentor data from mock-data

const AdminMentorTable: React.FC = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>멘토</TableCell>
          <TableCell>프로그램</TableCell>
          <TableCell>매칭 현황</TableCell>
          <TableCell>리뷰</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {mentorData.map((mentor) => (
          <TableRow key={mentor.rank}>
            <TableCell>{mentor.rank}</TableCell>
            <TableCell>{mentor.mentor}</TableCell>
            <TableCell>{mentor.program}</TableCell>
            <TableCell>{mentor.match}</TableCell>
            <TableCell>{mentor.reviews}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminMentorTable;
