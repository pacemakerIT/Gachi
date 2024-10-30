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

const mentorData = [
  {
    rank: 1,
    mentor: 'John Doe',
    program: 'IT Mentoring',
    match: '5/5',
    reviews: '4.8',
  },
  {
    rank: 2,
    mentor: 'Jane Smith',
    program: 'Design Mentoring',
    match: '4/5',
    reviews: '4.6',
  },
  // Add more data
];

const MentorTable: React.FC = () => {
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
      </CardContent>
    </Card>
  );
};

export default MentorTable;
