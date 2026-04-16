import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { SchoolsService } from '../schools/schools.service';
export declare class AuthService {
    private usersService;
    private schoolsService;
    private jwtService;
    constructor(usersService: UsersService, schoolsService: SchoolsService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<{
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
            name: string;
            createdAt: Date;
            updatedAt: Date;
            domain: string;
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
    }>;
    refreshToken(token: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
