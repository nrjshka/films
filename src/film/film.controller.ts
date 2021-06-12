import { Film } from './film.entity';
import { FilmService } from './film.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('film')
export class FilmController {
  constructor(private filmService: FilmService) {}

  @Get()
  findAll() {
    return this.filmService.getFilms();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.filmService.findOne(id);
  }

  @Post() create(@Body() film: Film) {
    return this.filmService.createFilm(film);
  }

  @Patch(':id')
  async editFilm(@Body() film: Film, @Param('id') id: string): Promise<Film> {
    const editedFilm = await this.filmService.editFilm(id, film);

    return editedFilm;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.filmService.remove(id);
  }
}
