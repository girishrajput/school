import { SchoolsService } from './schools.service';
import { CreateSchoolDto } from './dto/create-school.dto';
export declare class SchoolsController {
    private readonly schoolsService;
    constructor(schoolsService: SchoolsService);
    create(dto: CreateSchoolDto): import(".prisma/client").Prisma.Prisma__SchoolClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        domain: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        domain: string;
    }[]>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__SchoolClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        domain: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
