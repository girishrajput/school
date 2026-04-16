import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { SchoolsService } from '../schools/schools.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private schoolsService: SchoolsService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) return null;
    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) return null;
    return user;
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email, roleId: user.roleId, schoolId: user.schoolId };
    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign({ ...payload, type: 'refresh' }, { expiresIn: '7d' }),
    };
  }

  async registerSchoolAdmin(data: { schoolName: string; schoolDomain: string; firstName: string; lastName: string; email: string; password: string; roleId?: string }) {
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

  async refreshToken(token: string) {
    try {
      const payload = this.jwtService.verify(token, { ignoreExpiration: false });
      if (payload.type !== 'refresh') throw new UnauthorizedException('Invalid refresh token');
      const user = await this.usersService.findById(payload.sub);
      if (!user) throw new UnauthorizedException();
      return this.login(user);
    } catch (err) {
      throw new UnauthorizedException('Refresh token invalid or expired');
    }
  }
}
