import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        roleId: string;
        schoolId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findById(id: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        roleId: string;
        schoolId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    create(data: CreateUserDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        roleId: string;
        schoolId: string;
    }>;
    getRoleIdByName(name: string): Promise<string>;
    assignRole(userId: string, roleId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        roleId: string;
        schoolId: string;
    }>;
}
