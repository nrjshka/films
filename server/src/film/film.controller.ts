import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateFilmDto, FilterFilmDto } from './dto/film.dto';
import { FilmService } from './film.service';

@Controller('film')
export class FilmController {
  constructor(private service: FilmService) {}

  @Post()
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.service.create(createFilmDto);
  }

  @Post('/edit')
  editFilm(@Body() editedFilmDto: EditFilmDtoEditFilmDto) {
    return this.service.edit(editedFilmDto);
  }

  @Get('/popular')
  getPopular() {
    return this.service.getPopularFilms();
  }

  @Get()
  async getFiltered(@Query() query: FilterFilmDto) {
    return this.service.findByTitle(query);
  }
}
