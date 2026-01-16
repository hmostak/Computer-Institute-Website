
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  CreditCard, 
  FileText, 
  Settings, 
  Bell, 
  Image as ImageIcon,
  CheckCircle,
  MapPin,
  ClipboardList,
  Wallet
} from 'lucide-react';

export const COLORS = {
  primary: '#1e40af', // Blue-800
  secondary: '#0ea5e9', // Sky-500
  accent: '#f59e0b', // Amber-500
};

export const ADMIN_NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin' },
  { id: 'students', label: 'Student Management', icon: <Users size={20} />, path: '/admin/students' },
  { id: 'branches', label: 'Branch Control', icon: <MapPin size={20} />, path: '/admin/branches' },
  { id: 'courses', label: 'Course Catalog', icon: <BookOpen size={20} />, path: '/admin/courses' },
  { id: 'fees', label: 'Fees & Payments', icon: <CreditCard size={20} />, path: '/admin/fees' },
  { id: 'verification', label: 'Online Verification', icon: <CheckCircle size={20} />, path: '/admin/verify' },
  { id: 'news', label: 'News & Notices', icon: <Bell size={20} />, path: '/admin/news' },
  { id: 'certificates', label: 'Certificates', icon: <FileText size={20} />, path: '/admin/certificates' },
  { id: 'gallery', label: 'Media Gallery', icon: <ImageIcon size={20} />, path: '/admin/gallery' },
  { id: 'settings', label: 'Settings', icon: <Settings size={20} />, path: '/admin/settings' },
];

export const STUDENT_NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/student' },
  { id: 'exams', label: 'Exams & Admit Card', icon: <ClipboardList size={20} />, path: '/student/exams' },
  { id: 'fees', label: 'Fee Payments', icon: <CreditCard size={20} />, path: '/student/fees' },
  { id: 'certificates', label: 'Certificates', icon: <FileText size={20} />, path: '/student/certificates' },
  { id: 'wallet', label: 'My E-Wallet', icon: <Wallet size={20} />, path: '/student/wallet' },
];

export const MOCK_COURSES = [
  { id: '1', name: 'ADCA (Advanced Diploma in Computer Application)', code: 'C001', duration: '12 Months', fees: 12000, description: 'Complete computer application course including Office, Tally, and Graphics.', image: 'https://picsum.photos/seed/comp1/400/300' },
  { id: '2', name: 'DCA (Diploma in Computer Application)', code: 'C002', duration: '6 Months', fees: 6500, description: 'Fundamental diploma course for beginners.', image: 'https://picsum.photos/seed/comp2/400/300' },
  { id: '3', name: 'Tally Prime with GST', code: 'C003', duration: '3 Months', fees: 4500, description: 'Professional accounting course with taxation.', image: 'https://picsum.photos/seed/comp3/400/300' },
  { id: '4', name: 'Web Development (React & Node)', code: 'C004', duration: '6 Months', fees: 15000, description: 'Modern full stack web development.', image: 'https://picsum.photos/seed/comp4/400/300' },
];
