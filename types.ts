
export enum UserRole {
  PUBLIC = 'PUBLIC',
  STUDENT = 'STUDENT',
  BRANCH_ADMIN = 'BRANCH_ADMIN',
  ADMIN = 'INSTITUTE_ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  branchId?: string;
  studentId?: string;
  avatar?: string;
}

export interface Course {
  id: string;
  name: string;
  code: string;
  duration: string;
  fees: number;
  description: string;
  image: string;
}

export interface Student {
  id: string;
  name: string;
  rollNo: string;
  courseId: string;
  branchId: string;
  status: 'active' | 'completed' | 'pending';
  joinDate: string;
  walletBalance: number;
}

export interface Branch {
  id: string;
  name: string;
  location: string;
  manager: string;
  studentCount: number;
}
