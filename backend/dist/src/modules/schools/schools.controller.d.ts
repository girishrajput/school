import { SchoolsService } from './schools.service';
import { CreateSchoolDto } from './dto/create-school.dto';
export declare class SchoolsController {
    private readonly schoolsService;
    constructor(schoolsService: SchoolsService);
    create(dto: CreateSchoolDto): import(".prisma/client").Prisma.Prisma__SchoolClient<{
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
    findById(id: string): import(".prisma/client").Prisma.Prisma__SchoolClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        domain: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
