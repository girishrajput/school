import { TeachersService } from './teachers.service';
import { CreateTeacherSubjectAssignmentDto } from './dto/create-teacher-subject-assignment.dto';
import { CreateTeacherLeaveDto } from './dto/create-teacher-leave.dto';
export declare class TeachersController {
    private readonly teachersService;
    constructor(teachersService: TeachersService);
    findAll(req: {
        user: {
            schoolId: string;
        };
    }, schoolId?: string): import(".prisma/client").Prisma.PrismaPromise<({
        school: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            domain: string;
        };
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
    })[]>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__TeacherClient<({
        school: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            domain: string;
        };
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
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    assignSubject(dto: CreateTeacherSubjectAssignmentDto): import(".prisma/client").Prisma.Prisma__TeacherSubjectAssignmentClient<{
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        classId: string;
        sectionId: string | null;
        subjectId: string;
        teacherId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getAssignments(req: {
        user: {
            schoolId: string;
        };
    }, schoolId?: string): import(".prisma/client").Prisma.PrismaPromise<({
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
        teacher: {
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
        };
    } & {
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        classId: string;
        sectionId: string | null;
        subjectId: string;
        teacherId: string;
    })[]>;
    requestLeave(dto: CreateTeacherLeaveDto): import(".prisma/client").Prisma.Prisma__TeacherLeaveClient<{
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        teacherId: string;
        fromDate: Date;
        toDate: Date;
        reason: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getLeaves(req: {
        user: {
            schoolId: string;
        };
    }, schoolId?: string): import(".prisma/client").Prisma.PrismaPromise<({
        teacher: {
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
        };
    } & {
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        teacherId: string;
        fromDate: Date;
        toDate: Date;
        reason: string;
    })[]>;
    updateLeaveStatus(id: string, data: {
        status: string;
    }): Promise<{
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        teacherId: string;
        fromDate: Date;
        toDate: Date;
        reason: string;
    }>;
}
