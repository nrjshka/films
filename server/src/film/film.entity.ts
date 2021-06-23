import { FilmCategory } from './../film_category/film_category.entity';
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Film extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  title: string;

  @Column({ length: 250 })
  original_title: string;

  @Column()
  description: string;

  @Column()
  release_date: string;

  @Column({ default: '0' })
  vote_average: number;

  @Column({ default: false })
  adult: boolean;

  @Column({ default: null })
  poster_path: string | null;

  @Column({ default: null })
  backdrop_path: string | null;

  @Column()
  film_category_id: number;
  @ManyToOne(() => FilmCategory, (filmCategory) => filmCategory.films)
  @JoinColumn({ name: 'film_category_id' })
  filmCategory: FilmCategory;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  setTitle() {
    this.original_title = this.title;
  }
}
