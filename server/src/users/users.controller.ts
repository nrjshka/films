import { CreateUserDto } from './dto/user.dto';
import { User } from './users.entity';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.service.create(createUserDto);
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.service.showById(+id);
  }
}
