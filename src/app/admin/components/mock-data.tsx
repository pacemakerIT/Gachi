'use client';
import React from 'react';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import PersonIcon from '@mui/icons-material/Person';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const pieData = [
  { name: 'IT', value: 30 },
  { name: '어드민', value: 25 },
  { name: '디자인', value: 20 },
  { name: '마케팅', value: 15 },
  { name: '논프로핏', value: 10 },
];

export const mentorData = [
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

export const programData = [
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

export const salesData = [
  { month: 'Jan', 매출: 300, 경비: 200, 순이익: 100, 무료: 50 },
  { month: 'Feb', 매출: 400, 경비: 250, 순이익: 150, 무료: 60 },
  { month: 'Mar', 매출: 350, 경비: 230, 순이익: 120, 무료: 70 },
  { month: 'Apr', 매출: 320, 경비: 210, 순이익: 110, 무료: 55 },
  { month: 'May', 매출: 390, 경비: 260, 순이익: 130, 무료: 65 },
  { month: 'Jun', 매출: 340, 경비: 230, 순이익: 115, 무료: 60 },
  { month: 'Jul', 매출: 370, 경비: 240, 순이익: 125, 무료: 50 },
  { month: 'Aug', 매출: 360, 경비: 240, 순이익: 120, 무료: 55 },
  { month: 'Sep', 매출: 380, 경비: 250, 순이익: 130, 무료: 60 },
  { month: 'Oct', 매출: 400, 경비: 270, 순이익: 140, 무료: 65 },
  { month: 'Nov', 매출: 390, 경비: 260, 순이익: 130, 무료: 60 },
  { month: 'Dec', 매출: 350, 경비: 240, 순이익: 120, 무료: 55 },
];

export const inflowData = [
  {
    month: 'Jan',
    구글검색: 100,
    도메인: 200,
    소셜미디어: 150,
    친구추천: 100,
    카카오톡: 50,
  },
  {
    month: 'Feb',
    구글검색: 120,
    도메인: 220,
    소셜미디어: 160,
    친구추천: 110,
    카카오톡: 60,
  },
  {
    month: 'Mar',
    구글검색: 130,
    도메인: 210,
    소셜미디어: 170,
    친구추천: 120,
    카카오톡: 70,
  },
  {
    month: 'Apr',
    구글검색: 140,
    도메인: 230,
    소셜미디어: 180,
    친구추천: 130,
    카카오톡: 75,
  },
  {
    month: 'May',
    구글검색: 150,
    도메인: 240,
    소셜미디어: 190,
    친구추천: 140,
    카카오톡: 80,
  },
  {
    month: 'Jun',
    구글검색: 160,
    도메인: 250,
    소셜미디어: 200,
    친구추천: 150,
    카카오톡: 85,
  },
  {
    month: 'Jul',
    구글검색: 170,
    도메인: 260,
    소셜미디어: 210,
    친구추천: 160,
    카카오톡: 90,
  },
  {
    month: 'Aug',
    구글검색: 180,
    도메인: 270,
    소셜미디어: 220,
    친구추천: 170,
    카카오톡: 95,
  },
  {
    month: 'Sep',
    구글검색: 190,
    도메인: 280,
    소셜미디어: 230,
    친구추천: 180,
    카카오톡: 100,
  },
  {
    month: 'Oct',
    구글검색: 200,
    도메인: 290,
    소셜미디어: 240,
    친구추천: 190,
    카카오톡: 105,
  },
  {
    month: 'Nov',
    구글검색: 210,
    도메인: 300,
    소셜미디어: 250,
    친구추천: 200,
    카카오톡: 110,
  },
  {
    month: 'Dec',
    구글검색: 220,
    도메인: 310,
    소셜미디어: 260,
    친구추천: 210,
    카카오톡: 115,
  },
];

export const userStatsData = {
  weeklyNewMembers: 10, // Example value
  monthlyNewMembers: 50, // Example value
  memberGrowthRate: 5, // Example value
  totalMembers: 200, // Example value
};

export const menuItems = [
  { text: 'Dashboard', icon: <SpaceDashboardOutlinedIcon /> },
  { text: '뉴스레터', icon: <MarkEmailUnreadOutlinedIcon /> },
  { text: '회원 관리', icon: <PersonIcon /> },
  { text: '멘토관리', icon: <GroupOutlinedIcon /> },
  { text: '프로그램 관리', icon: <PendingActionsOutlinedIcon /> },
  { text: '결제 현황', icon: <CreditCardOutlinedIcon /> },
  { text: 'Settings', icon: <SettingsIcon /> },
  { text: '로그아웃', icon: <LogoutOutlinedIcon /> },
];
