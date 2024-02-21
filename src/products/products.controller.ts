import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from 'src/entities/products.entity';
import { ApiResponse, ApiOperation, ApiTags, ApiQuery } from '@nestjs/swagger';
import { agent } from 'supertest';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  //通过数据库查询产品List
  @ApiOperation({ summary: 'getList' })
  @ApiResponse({
    status: 200,
    description: 'Return all Product.',
    type: [Products],
  })
  @Get('list')
  getList(): Promise<Products[]> {
    return this.productsService.getList();
  }

  @ApiOperation({ summary: 'getProductById' })
  @ApiResponse({
    status: 200,
    description: 'Return Product By Id.',
    type: Products,
  })
  @Get('getProductById')
  @ApiQuery({ name: 'id', description: 'productId' })
  getProductById(@Query('id') query: any): Promise<Products> {
    const id: number = parseInt(query.id);
    return this.productsService.getProductById(id);
  }

  @ApiOperation({ summary: 'Create product' })
  @ApiResponse({
    status: 200,
    description: 'The product has been successfully created.',
  })
  @Post('addProduct')
  addProduct(@Body() body: Products): Promise<object> {
    return this.productsService.addProduct(body);
  }

  @ApiOperation({ summary: 'update product' })
  @ApiResponse({
    status: 200,
    description: 'The product has been successfully updated.',
  })
  @Post('updateProduct')
  updateProduct(@Body() body: Products): Promise<object> {
    return this.productsService.updateProduct(body);
  }

  @ApiOperation({ summary: 'del product' })
  @ApiResponse({
    status: 200,
    description: 'The product has been successfully del.',
  })
  @Post('delProduct')
  delProduct(@Body() body: any): Promise<object> {
    return this.productsService.delProduct(body);
  }
}
