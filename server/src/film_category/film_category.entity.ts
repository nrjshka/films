import { Category } from 'src/category/category.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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
}
