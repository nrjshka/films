import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getUser(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(user: User) {
    this.userRepository.save(user);
  }
}
