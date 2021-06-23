import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryCreateDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CategoryCreateDto) {
    return this.service.create(createCategoryDto);
  }

  @Get()
  getAll() {
    return this.service.getAll();
  }
}
