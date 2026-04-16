import { HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterAuthDto): Promise<{
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
    login(dto: LoginAuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
    } | {
        statusCode: HttpStatus;
        message: string;
    }>;
    refresh(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
