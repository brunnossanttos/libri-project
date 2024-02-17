import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../database/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    if (data.password.length < 6) {
      throw new Error('password is required aleast 6 characters long');
    }
    const userExist = await this.prisma.user.findFirst({
      where: { email: data.email },
    });

    if (userExist) {
      throw Error('User already exists');
    }

    const user = await this.prisma.user.create({ data });

    return user;
  }

  async findAll(): Promise<User[]> {
    const users = this.prisma.user.findMany();
    return users;
  }

  async findOne(id: string): Promise<User | undefined> {
    const user = this.prisma.user.findUnique({ where: { id } });

    return user;
  }

  async update(id: string, data: UpdateUserDto): Promise<User | undefined> {
    const userExist = this.prisma.user.findUnique({ where: { id } });
    if (!userExist) {
      throw new Error('User not found');
    }

    return await this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: string): Promise<User> {
    const userExist = this.prisma.user.findUnique({ where: { id } });
    if (!userExist) {
      throw new Error('User not found');
    }

    return await this.prisma.user.delete({ where: { id } });
  }
}
