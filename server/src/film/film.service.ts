import { CreateFilmDto, FilterFilmDto } from './dto/film.dto';
import { Injectable } from '@nestjs/common';
import { Film } from './film.entity';

@Injectable()
export class FilmService {
  async create(filmDto: CreateFilmDto) {
    const film = await Film.create(filmDto);

    await film.save();

    return film;
  }

  async getPopularFilms() {
    // Time mock with returning last 20 films
    return await Film.find({
      order: {
        id: 'DESC',
      },
      take: 20,
    });
  }

  async findByTitle(filterDto: FilterFilmDto) {
    const { filter } = filterDto;

    return await Film.find({
      order: {
        id: 'DESC',
      },
      where: {
        title: filter,
      },
    });
  }
}
