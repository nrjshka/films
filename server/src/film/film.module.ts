import { FilmController } from './film.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { Film } from './film.entity';
import { FilmService } from './film.service';

@Module({
  imports: [TypeOrmModule.forFeature([Film])],
  controllers: [FilmController],
  providers: [FilmService],
})
export class FilmModule {}
