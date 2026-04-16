import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const register = (dto: any) => api.post('/auth/register', dto);
export const login = (dto: any) => api.post('/auth/login', dto);
export const refresh = (refreshToken: string) => api.post('/auth/refresh', { refreshToken });

export const getStudents = (schoolId?: string) => api.get('/students', { params: { schoolId } });
export const getStudent = (id: string) => api.get(`/students/${id}`);
export const createStudent = (dto: any) => api.post('/students', dto);
export const updateStudent = (id: string, dto: any) => api.put(`/students/${id}`, dto);
export const deleteStudent = (id: string) => api.delete(`/students/${id}`);

export const submitAdmission = (dto: any) => api.post('/admissions', dto);
export const getAdmissions = (schoolId?: string) => api.get('/admissions', { params: { schoolId } });
export const updateAdmission = (id: string, dto: any) => api.put(`/admissions/${id}`, dto);

export const getFeeStructures = (schoolId?: string) => api.get('/fees/structure', { params: { schoolId } });
export const createFeeStructure = (dto: any) => api.post('/fees/structure', dto);
export const updateFeeStructure = (id: string, dto: any) => api.put(`/fees/structure/${id}`, dto);
export const deleteFeeStructure = (id: string) => api.delete(`/fees/structure/${id}`);

export const getFeePayments = (schoolId?: string) => api.get('/fees/payments', { params: { schoolId } });
export const createFeePayment = (dto: any) => api.post('/fees/payments', dto);
export const generateInvoice = (dto: any) => api.post('/fees/invoice', dto);

export const markAttendance = (dto: any) => api.post('/attendance', dto);
export const bulkAttendance = (dtos: any[]) => api.post('/attendance/bulk', dtos);
export const getAttendance = (schoolId?: string) => api.get('/attendance', { params: { schoolId } });
export const getMonthlyAttendance = (month: number, year: number, schoolId?: string) =>
  api.get('/attendance/monthly', { params: { month, year, schoolId } });

export const getExams = (schoolId?: string) => api.get('/exams', { params: { schoolId } });
export const getExam = (id: string) => api.get(`/exams/${id}`);
export const createExam = (dto: any) => api.post('/exams', dto);
export const addExamMark = (dto: any) => api.post('/exams/marks', dto);
export const getExamMarks = (examId?: string, schoolId?: string) =>
  api.get('/exams/marks', { params: { examId, schoolId } });
export const addResult = (dto: any) => api.post('/exams/results', dto);
export const getResults = (examId?: string, schoolId?: string) =>
  api.get('/exams/results', { params: { examId, schoolId } });
export const updateResult = (id: string, dto: any) => api.put(`/exams/results/${id}`, dto);

export const getTeachers = (schoolId?: string) => api.get('/teachers', { params: { schoolId } });
export const getTeacher = (id: string) => api.get(`/teachers/${id}`);
export const assignTeacherSubject = (dto: any) => api.post('/teachers/assignments', dto);
export const getTeacherAssignments = (schoolId?: string) => api.get('/teachers/assignments', { params: { schoolId } });
export const requestTeacherLeave = (dto: any) => api.post('/teachers/leaves', dto);
export const getTeacherLeaves = (schoolId?: string) => api.get('/teachers/leaves', { params: { schoolId } });
export const updateTeacherLeave = (id: string, dto: any) => api.put(`/teachers/leaves/${id}`, dto);

export default api;
