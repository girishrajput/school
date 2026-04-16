import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { SchoolsService } from '../schools/schools.service';
export declare class AuthService {
    private usersService;
    private schoolsService;
    private jwtService;
    constructor(usersService: UsersService, schoolsService: SchoolsService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<{
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        roleId: string;
        schoolId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    login(user: any): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    registerSchoolAdmin(data: {
        schoolName: string;
        schoolDomain: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        roleId?: string;
    }): Promise<{
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
    }>;
    refreshToken(token: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
