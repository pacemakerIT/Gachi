'use client';
import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { programData } from './mock-data'; // Import program data from mock-data

const AdminProgramTable: React.FC = () => {
  return (
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
  );
};

export default AdminProgramTable;
