import { PrismaService } from '../../prisma/prisma.service';
import { CreateAdmissionDto } from './dto/create-admission.dto';
import { UpdateAdmissionDto } from './dto/update-admission.dto';
export declare class AdmissionsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(schoolId: string): import(".prisma/client").Prisma.PrismaPromise<({
        school: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            domain: string;
        };
        class: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        } | null;
        section: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            classId: string;
        } | null;
    } & {
        email: string;
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        classId: string | null;
        sectionId: string | null;
        studentName: string;
        parentName: string;
        phone: string;
        status: string;
        comments: string | null;
    })[]>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__AdmissionClient<({
        school: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            domain: string;
        };
        class: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        } | null;
        section: {
            schoolId: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            classId: string;
        } | null;
    } & {
        email: string;
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        classId: string | null;
        sectionId: string | null;
        studentName: string;
        parentName: string;
        phone: string;
        status: string;
        comments: string | null;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    create(dto: CreateAdmissionDto): import(".prisma/client").Prisma.Prisma__AdmissionClient<{
        email: string;
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        classId: string | null;
        sectionId: string | null;
        studentName: string;
        parentName: string;
        phone: string;
        status: string;
        comments: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateStatus(id: string, dto: UpdateAdmissionDto): Promise<{
        email: string;
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        classId: string | null;
        sectionId: string | null;
        studentName: string;
        parentName: string;
        phone: string;
        status: string;
        comments: string | null;
    }>;
    delete(id: string): Promise<{
        email: string;
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        classId: string | null;
        sectionId: string | null;
        studentName: string;
        parentName: string;
        phone: string;
        status: string;
        comments: string | null;
    }>;
}
