import { FilmController } from './film.controller';
import { FilmService } from './film.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Film } from './film.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Film])],
  providers: [FilmService],
  controllers: [FilmController],
})
export class FilmModule {}
