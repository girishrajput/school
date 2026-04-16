import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        roleId: string;
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        roleId: string;
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    create(data: CreateUserDto): Promise<{
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        roleId: string;
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getRoleIdByName(name: string): Promise<string>;
    assignRole(userId: string, roleId: string): Promise<{
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        roleId: string;
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
