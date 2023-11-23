import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/users.reposity';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async create(user: { id: string; email: string; name: string }) {
    return await this.repository.create(user);
  }
}
