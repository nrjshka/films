import { FilmCategory } from './film_category.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FilmCategory])],
})
export class FilmCategoryModule {}
