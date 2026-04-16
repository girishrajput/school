import { PrismaService } from '../../prisma/prisma.service';
import { CreateSchoolDto } from './dto/create-school.dto';
export declare class SchoolsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateSchoolDto): import(".prisma/client").Prisma.Prisma__SchoolClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        domain: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        domain: string;
    }[]>;
    findById(schoolId: string): import(".prisma/client").Prisma.Prisma__SchoolClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        domain: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
