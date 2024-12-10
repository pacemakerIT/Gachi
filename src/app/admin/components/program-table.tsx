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
  Tooltip,
} from '@mui/material';
import { PopularProgram } from '@/utils/types';

interface ProgramTableProps {
  programData: PopularProgram[];
}

const ProgramTable: React.FC<ProgramTableProps> = ({ programData }) => {
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
              <TableCell>분야</TableCell>
              <TableCell>멘토</TableCell>
              <TableCell>가격</TableCell>
              <TableCell>누적 판매수</TableCell>
              <TableCell>누적 판매액</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {programData.map((program, index) => (
              <TableRow key={program.programid}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Tooltip title={program.program_title} arrow>
                    <Typography noWrap>{program.program_title}</Typography>
                  </Tooltip>
                </TableCell>
                <TableCell>{program.topic}</TableCell>
                <TableCell>{program.mentor}</TableCell>
                <TableCell>{program.cost}</TableCell>
                <TableCell>{program.accumulated_sales_count}</TableCell>
                <TableCell>{program.accumulated_sales_amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ProgramTable;
