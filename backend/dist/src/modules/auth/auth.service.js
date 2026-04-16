"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const users_service_1 = require("../users/users.service");
const schools_service_1 = require("../schools/schools.service");
let AuthService = class AuthService {
    constructor(usersService, schoolsService, jwtService) {
        this.usersService = usersService;
        this.schoolsService = schoolsService;
        this.jwtService = jwtService;
    }
    async validateUser(email, pass) {
        const user = await this.usersService.findByEmail(email);
        if (!user)
            return null;
        const isMatch = await bcrypt.compare(pass, user.password);
        if (!isMatch)
            return null;
        return user;
    }
    async login(user) {
        const payload = { sub: user.id, email: user.email, roleId: user.roleId, schoolId: user.schoolId };
        return {
            accessToken: this.jwtService.sign(payload),
            refreshToken: this.jwtService.sign({ ...payload, type: 'refresh' }, { expiresIn: '7d' }),
        };
    }
    async registerSchoolAdmin(data) {
        const school = await this.schoolsService.create({ name: data.schoolName, domain: data.schoolDomain });
        const hashed = await bcrypt.hash(data.password, 10);
        const roleId = data.roleId || (await this.usersService.getRoleIdByName('ADMIN'));
        const user = await this.usersService.create({
            email: data.email,
            password: hashed,
            firstName: data.firstName,
            lastName: data.lastName,
            roleId,
            schoolId: school.id,
        });
        return { school, user };
    }
    async refreshToken(token) {
        try {
            const payload = this.jwtService.verify(token, { ignoreExpiration: false });
            if (payload.type !== 'refresh')
                throw new common_1.UnauthorizedException('Invalid refresh token');
            const user = await this.usersService.findById(payload.sub);
            if (!user)
                throw new common_1.UnauthorizedException();
            return this.login(user);
        }
        catch (err) {
            throw new common_1.UnauthorizedException('Refresh token invalid or expired');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        schools_service_1.SchoolsService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map