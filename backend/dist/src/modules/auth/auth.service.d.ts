import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(registerDto: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        roleId: string;
        schoolId: string;
    }): Promise<{
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            roleId: string;
            schoolId: string;
        };
        token: string;
    }>;
    login(loginDto: {
        email: string;
        password: string;
    }): Promise<{
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            roleId: string;
            schoolId: string;
        };
        token: string;
    }>;
    getProfile(userId: string): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        role: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        };
        school: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            domain: string;
        };
    }>;
}
