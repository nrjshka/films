import { Category } from './category.module';
import { Injectable } from '@nestjs/common';
import { CategoryCreateDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  async create(createCategoryDto: CategoryCreateDto) {
    const category = await Category.create(createCategoryDto);

    category.save();

    return category;
  }
}
