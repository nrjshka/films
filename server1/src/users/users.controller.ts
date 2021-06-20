import { User } from './users.entity';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  findAll() {
    return this.service.getUsers();
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.getUser(params.id);
  }

  @Post() create(@Body() user: User) {
    return this.service.createUser(user);
  }
}
