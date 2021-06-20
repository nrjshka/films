import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { Film } from './film.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Film])],
})
export class FilmModule {}
