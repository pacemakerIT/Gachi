'use client';

import React from 'react';
import {
  Card,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@mui/material';
import { PopularMentors } from '@/utils/types';

interface MentorTableProps {
  mentorData: PopularMentors[];
}

const MentorTable: React.FC<MentorTableProps> = ({ mentorData }) => {
  return (
    <Card
      sx={{
        flex: 1,
        minHeight: 150,
        width: 150,
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: 'none',
      }}
    >
      <CardContent>
        <Typography variant="h6">인기 멘토</Typography>
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
            {mentorData.map((mentor, index) => (
              <TableRow key={mentor.userid}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{mentor.fullname}</TableCell>
                <TableCell>{mentor.industry}</TableCell>
                <TableCell>{mentor.matching_count}</TableCell>
                <TableCell>{mentor.feedback_count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default MentorTable;
