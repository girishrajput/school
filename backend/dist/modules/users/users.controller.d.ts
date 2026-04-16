import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    me(req: {
        user: {
            userId: string;
        };
    }): Promise<{
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
}
