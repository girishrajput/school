import { PrismaService } from '../../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(schoolId: string): import(".prisma/client").Prisma.PrismaPromise<({
        parent: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            userId: string;
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
        admission: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            schoolId: string;
            classId: string | null;
            sectionId: string | null;
            studentName: string;
            parentName: string;
            phone: string;
            status: string;
            comments: string | null;
        };
        documents: {
            id: string;
            name: string;
            createdAt: Date;
            type: string;
            url: string;
            studentId: string;
        }[];
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
    })[]>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__StudentClient<{
        parent: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            schoolId: string;
            userId: string;
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
        admission: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            schoolId: string;
            classId: string | null;
            sectionId: string | null;
            studentName: string;
            parentName: string;
            phone: string;
            status: string;
            comments: string | null;
        };
        documents: {
            id: string;
            name: string;
            createdAt: Date;
            type: string;
            url: string;
            studentId: string;
        }[];
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
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    create(dto: CreateStudentDto): Promise<{
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
    }>;
    update(id: string, dto: UpdateStudentDto): Promise<{
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
    }>;
    delete(id: string): Promise<{
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
    }>;
    addDocument(studentId: string, data: {
        url: string;
        name: string;
        type: string;
    }): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        type: string;
        url: string;
        studentId: string;
    }>;
}
