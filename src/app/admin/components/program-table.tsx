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

const programData = [
  {
    rank: 1,
    program: 'Web Development',
    mentor: 'John Doe',
    price: '$200',
    sales: 150,
    totalSales: '$30,000',
  },
  {
    rank: 2,
    program: 'Graphic Design',
    mentor: 'Jane Smith',
    price: '$150',
    sales: 120,
    totalSales: '$18,000',
  },
  // Add more data
];

const ProgramTable: React.FC = () => {
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
        <Typography variant="h6">인기 프로그램</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>프로그램</TableCell>
              <TableCell>멘토</TableCell>
              <TableCell>가격</TableCell>
              <TableCell>누적 판매수</TableCell>
              <TableCell>누적 판매액</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {programData.map((program) => (
              <TableRow key={program.rank}>
                <TableCell>{program.rank}</TableCell>
                <TableCell>{program.program}</TableCell>
                <TableCell>{program.mentor}</TableCell>
                <TableCell>{program.price}</TableCell>
                <TableCell>{program.sales}</TableCell>
                <TableCell>{program.totalSales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ProgramTable;
