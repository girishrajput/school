import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async create(data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }

  async getRoleIdByName(name: string) {
    const role = await this.prisma.role.findUnique({ where: { name } });
    if (!role) {
      throw new Error('Role not found: ' + name);
    }
    return role.id;
  }

  async assignRole(userId: string, roleId: string) {
    const user = await this.findById(userId);
    if (!user) throw new NotFoundException('User not found');
    return this.prisma.user.update({ where: { id: userId }, data: { roleId } });
  }
}
