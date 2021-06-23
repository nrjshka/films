import { Film } from 'src/film/film.entity';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column({ length: 25 })
  name: string;

  @ManyToMany(() => Film, (film) => film.categories)
  @JoinTable()
  films: Film[];
}
