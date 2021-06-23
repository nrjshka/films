import { Category } from 'src/category/category.entity';
import { Film } from 'src/film/film.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class FilmCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  film_category_id: number;

  @Column()
  category_id: number;
  @ManyToOne(() => Category, (category) => category.filmCategories)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(() => Film, (film) => film.filmCategory)
  films: Film[];
}
