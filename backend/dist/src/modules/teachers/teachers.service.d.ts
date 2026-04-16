import { PrismaService } from '../../prisma/prisma.service';
import { CreateTeacherSubjectAssignmentDto } from './dto/create-teacher-subject-assignment.dto';
import { CreateTeacherLeaveDto } from './dto/create-teacher-leave.dto';
export declare class TeachersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findTeachers(schoolId: string): import(".prisma/client").Prisma.PrismaPromise<({
        school: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            domain: string;
        };
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
    })[]>;
    findTeacher(id: string): import(".prisma/client").Prisma.Prisma__TeacherClient<{
        school: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            domain: string;
        };
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
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    assignSubject(dto: CreateTeacherSubjectAssignmentDto): import(".prisma/client").Prisma.Prisma__TeacherSubjectAssignmentClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        classId: string;
        sectionId: string | null;
        subjectId: string;
        teacherId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAssignments(schoolId: string): import(".prisma/client").Prisma.PrismaPromise<({
        teacher: {
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
        };
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
        subjectId: string;
        teacherId: string;
    })[]>;
    requestLeave(dto: CreateTeacherLeaveDto): import(".prisma/client").Prisma.Prisma__TeacherLeaveClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        status: string;
        teacherId: string;
        fromDate: Date;
        toDate: Date;
        reason: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findLeaves(schoolId: string): import(".prisma/client").Prisma.PrismaPromise<({
        teacher: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        status: string;
        teacherId: string;
        fromDate: Date;
        toDate: Date;
        reason: string;
    })[]>;
    updateLeaveStatus(id: string, status: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        schoolId: string;
        status: string;
        teacherId: string;
        fromDate: Date;
        toDate: Date;
        reason: string;
    }>;
}
