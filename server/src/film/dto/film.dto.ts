import { IsDate, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateFilmDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsDateString()
  release_date: string;
}

export class FilterFilmDto {
  @IsNotEmpty()
  @IsString()
  filter;
}
