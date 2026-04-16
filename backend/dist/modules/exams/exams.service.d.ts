import { PrismaService } from '../../prisma/prisma.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { CreateMarkDto } from './dto/create-mark.dto';
import { CreateResultDto } from './dto/create-result.dto';
export declare class ExamsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findExams(schoolId: string): import(".prisma/client").Prisma.PrismaPromise<({
        class: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        };
        section: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            classId: string;
        } | null;
        subject: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            code: string;
        };
    } & {
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        classId: string;
        sectionId: string | null;
        title: string;
        subjectId: string;
        examDate: Date;
        totalMarks: number;
    })[]>;
    getExam(id: string): import(".prisma/client").Prisma.Prisma__ExamClient<({
        class: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        };
        section: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            classId: string;
        } | null;
        subject: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            code: string;
        };
        marks: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            studentId: string;
            examId: string;
            marksObtained: number;
        }[];
        results: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: string;
            studentId: string;
            examId: string;
            totalObtained: number;
            percentage: number;
            grade: string;
        }[];
    } & {
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        classId: string;
        sectionId: string | null;
        title: string;
        subjectId: string;
        examDate: Date;
        totalMarks: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    createExam(dto: CreateExamDto): import(".prisma/client").Prisma.Prisma__ExamClient<{
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        classId: string;
        sectionId: string | null;
        title: string;
        subjectId: string;
        examDate: Date;
        totalMarks: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    createMark(dto: CreateMarkDto): import(".prisma/client").Prisma.Prisma__MarkClient<{
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        examId: string;
        marksObtained: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findMarks(schoolId: string, examId?: string): import(".prisma/client").Prisma.PrismaPromise<({
        student: {
            user: {
                email: string;
                password: string;
                firstName: string;
                lastName: string;
                roleId: string;
                schoolId: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            parentId: string | null;
            classId: string | null;
            sectionId: string | null;
            admissionId: string | null;
            enrolledAt: Date | null;
        };
        exam: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            classId: string;
            sectionId: string | null;
            title: string;
            subjectId: string;
            examDate: Date;
            totalMarks: number;
        };
    } & {
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        studentId: string;
        examId: string;
        marksObtained: number;
    })[]>;
    createResult(dto: CreateResultDto): import(".prisma/client").Prisma.Prisma__ResultClient<{
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        studentId: string;
        examId: string;
        totalObtained: number;
        percentage: number;
        grade: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findResults(schoolId: string, examId?: string): import(".prisma/client").Prisma.PrismaPromise<({
        student: {
            user: {
                email: string;
                password: string;
                firstName: string;
                lastName: string;
                roleId: string;
                schoolId: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            parentId: string | null;
            classId: string | null;
            sectionId: string | null;
            admissionId: string | null;
            enrolledAt: Date | null;
        };
        exam: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            classId: string;
            sectionId: string | null;
            title: string;
            subjectId: string;
            examDate: Date;
            totalMarks: number;
        };
    } & {
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        studentId: string;
        examId: string;
        totalObtained: number;
        percentage: number;
        grade: string;
    })[]>;
    updateResult(id: string, dto: Partial<CreateResultDto>): Promise<{
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        studentId: string;
        examId: string;
        totalObtained: number;
        percentage: number;
        grade: string;
    }>;
}
