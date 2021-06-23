import { Category } from './category.entity';
import { Injectable } from '@nestjs/common';
import { CategoryCreateDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  async create(createCategoryDto: CategoryCreateDto) {
    const category = await Category.create(createCategoryDto);

    category.save();

    return category;
  }

  async getAll() {
    return Category.find({
      order: {
        category_id: 'DESC',
      },
    });
  }
}
