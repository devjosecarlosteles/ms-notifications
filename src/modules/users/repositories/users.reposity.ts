import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: { id: string; email: string; name: string }) {
    const userCreated = await this.prismaService.users.create({
      data: user,
    });

    return userCreated;
  }
}
