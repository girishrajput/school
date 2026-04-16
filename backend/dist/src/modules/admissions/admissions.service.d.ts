import { PrismaService } from '../../prisma/prisma.service';
import { CreateAdmissionDto } from './dto/create-admission.dto';
import { UpdateAdmissionDto } from './dto/update-admission.dto';
export declare class AdmissionsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(schoolId: string): import(".prisma/client").Prisma.PrismaPromise<({
        school: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            domain: string;
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
    } & {
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
    })[]>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__AdmissionClient<{
        school: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            domain: string;
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
    } & {
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
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    create(dto: CreateAdmissionDto): import(".prisma/client").Prisma.Prisma__AdmissionClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateStatus(id: string, dto: UpdateAdmissionDto): Promise<{
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
    }>;
    delete(id: string): Promise<{
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
    }>;
}
