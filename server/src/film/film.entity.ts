import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Film extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  title: string;

  @Column()
  description: string;

  @Column({ type: 'integer' })
  release_year: number;

  @Column({ default: '0' })
  rating: number;
}
