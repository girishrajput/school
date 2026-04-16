import { Injectable, UnauthorizedException, ConflictException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    roleId: string;
    schoolId: string;
  }) {
    const { email, password, firstName, lastName, roleId, schoolId } = registerDto;

    // Validate required fields
    if (!email || !password || !firstName || !lastName || !roleId || !schoolId) {
      throw new BadRequestException('All fields are required');
    }

    // Check if school exists
    const school = await this.prisma.school.findUnique({
      where: { id: schoolId },
    });

    if (!school) {
      throw new BadRequestException('School not found');
    }

    // Check if role exists
    const role = await this.prisma.role.findUnique({
      where: { id: roleId },
    });

    if (!role) {
      throw new BadRequestException('Role not found');
    }

    // Check if user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        roleId,
        schoolId,
      },
    });

    // Generate JWT token
    const token = this.jwtService.sign({
      id: user.id,
      email: user.email,
      schoolId: user.schoolId,
      roleId: user.roleId,
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        roleId: user.roleId,
        schoolId: user.schoolId,
      },
      token,
    };
  }

  async login(loginDto: { email: string; password: string }) {
    const { email, password } = loginDto;

    // Validate required fields
    if (!email || !password) {
      throw new BadRequestException('Email and password are required');
    }

    // Find user
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate JWT token
    const token = this.jwtService.sign({
      id: user.id,
      email: user.email,
      schoolId: user.schoolId,
      roleId: user.roleId,
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        roleId: user.roleId,
        schoolId: user.schoolId,
      },
      token,
    };
  }

  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        role: true,
        school: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      school: user.school,
    };
  }
}