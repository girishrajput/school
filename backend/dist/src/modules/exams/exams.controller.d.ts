import { ExamsService } from './exams.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { CreateMarkDto } from './dto/create-mark.dto';
import { CreateResultDto } from './dto/create-result.dto';
export declare class ExamsController {
    private readonly examsService;
    constructor(examsService: ExamsService);
    findAll(req: {
        user: {
            schoolId: string;
        };
    }, schoolId?: string): import(".prisma/client").Prisma.PrismaPromise<({
        class: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
        };
        section: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            classId: string;
        };
        subject: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            code: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        classId: string;
        sectionId: string | null;
        title: string;
        subjectId: string;
        examDate: Date;
        totalMarks: number;
    })[]>;
    createExam(dto: CreateExamDto): import(".prisma/client").Prisma.Prisma__ExamClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        classId: string;
        sectionId: string | null;
        title: string;
        subjectId: string;
        examDate: Date;
        totalMarks: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__ExamClient<{
        marks: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            studentId: string;
            examId: string;
            marksObtained: number;
        }[];
        results: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            studentId: string;
            status: string;
            examId: string;
            totalObtained: number;
            percentage: number;
            grade: string;
        }[];
        class: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
        };
        section: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            classId: string;
        };
        subject: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            code: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        classId: string;
        sectionId: string | null;
        title: string;
        subjectId: string;
        examDate: Date;
        totalMarks: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    createMark(dto: CreateMarkDto): import(".prisma/client").Prisma.Prisma__MarkClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        examId: string;
        marksObtained: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getMarks(req: {
        user: {
            schoolId: string;
        };
    }, examId?: string, schoolId?: string): import(".prisma/client").Prisma.PrismaPromise<({
        student: {
            user: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                password: string;
                firstName: string;
                lastName: string;
                roleId: string;
                schoolId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            userId: string;
            parentId: string | null;
            classId: string | null;
            sectionId: string | null;
            admissionId: string | null;
            enrolledAt: Date | null;
        };
        exam: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            classId: string;
            sectionId: string | null;
            title: string;
            subjectId: string;
            examDate: Date;
            totalMarks: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        examId: string;
        marksObtained: number;
    })[]>;
    createResult(dto: CreateResultDto): import(".prisma/client").Prisma.Prisma__ResultClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        status: string;
        examId: string;
        totalObtained: number;
        percentage: number;
        grade: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getResults(req: {
        user: {
            schoolId: string;
        };
    }, examId?: string, schoolId?: string): import(".prisma/client").Prisma.PrismaPromise<({
        student: {
            user: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                password: string;
                firstName: string;
                lastName: string;
                roleId: string;
                schoolId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            userId: string;
            parentId: string | null;
            classId: string | null;
            sectionId: string | null;
            admissionId: string | null;
            enrolledAt: Date | null;
        };
        exam: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            classId: string;
            sectionId: string | null;
            title: string;
            subjectId: string;
            examDate: Date;
            totalMarks: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        status: string;
        examId: string;
        totalObtained: number;
        percentage: number;
        grade: string;
    })[]>;
    updateResult(id: string, dto: Partial<CreateResultDto>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        studentId: string;
        status: string;
        examId: string;
        totalObtained: number;
        percentage: number;
        grade: string;
    }>;
}
