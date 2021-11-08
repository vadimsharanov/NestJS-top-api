import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';

@Controller('product')
export class ProductController {
  @Post('createProduct')
  async createProduct(@Body() dto: Omit<ProductModel, '_id'>) {}

  @Get(':id')
  async getProduct(@Param('id') id: string) {}

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {}

  @Patch('id')
  async patchProduct(@Param('id') id: string, @Body() dto: ProductModel) {}

  @HttpCode(200)
  @Post()
  async findProduct(@Body() dto: FindProductDto) {}
}
