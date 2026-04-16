import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    getProfile(req: any): Promise<{
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
