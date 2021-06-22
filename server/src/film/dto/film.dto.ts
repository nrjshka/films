import {
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

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

export class EditFilmDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsOptional()
  title: string;

  @IsOptional()
  original_title: string;

  @IsOptional()
  description: string;

  @IsOptional()
  release_date: string;

  @IsOptional()
  vote_average: number;

  @IsOptional()
  adult: boolean;

  @IsOptional()
  poster_path: string | null;

  @IsOptional()
  backdrop_path: string | null;
}
