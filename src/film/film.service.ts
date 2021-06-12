import { Film } from './film.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(Film) private filmRepository: Repository<Film>,
  ) {}

  async getFilms(): Promise<Film[]> {
    return await this.filmRepository.find();
  }

  findOne(id: string): Promise<Film> {
    return this.filmRepository.findOne(id);
  }

  async createFilm(film: Film) {
    this.filmRepository.save(film);
  }

  async remove(id: string): Promise<void> {
    await this.filmRepository.delete(id);
  }

  async editFilm(id: string, film: Film): Promise<Film> {
    const editedFilm = await this.findOne(id);

    if (!editedFilm) {
      throw new NotFoundException('Film is not found');
    }

    editedFilm.description = film.description;
    editedFilm.title = film.title;

    await editedFilm.save();

    return editedFilm;
  }
}
