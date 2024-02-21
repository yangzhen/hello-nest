import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/entities/products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
  ) {}
  // 查询数据库产品数据
  // 获取所有用户数据列表(productsRepository.query()方法属于typeoram)
  async getList(): Promise<Products[]> {
    return await this.productsRepository.query('select * from products');
  }

  async getProductById(id: any): Promise<any> {
    try {
      const res = await this.productsRepository.findOne({ where: { id: id } });
      return {
        code: 200,
        data: res,
        message: '查询成功',
      };
    } catch {
      return {
        code: 500,
        message: '查询失败',
      };
    }
  }

  async addProduct(product: any): Promise<object> {
    try {
      await this.productsRepository.insert(product);
      return {
        code: 200,
        data: null,
        message: '新增成功'
      };
    } catch {
      return {
        code: 500,
        message: '新增失败',
      };
    }
  }

  async updateProduct(product: any): Promise<object> {
    try {
      await this.productsRepository.update({ id: product.id }, product);
      return {
        code: 200,
        data: null,
        message: '更新成功',
      };
    } catch {
      return {
        code: 500,
        message: '更新失败',
      };
    }
  }

  async delProduct(params: any): Promise<object> {
    try {
      await this.productsRepository.delete({ id: params.id });
      return {
        code: 200,
        data: null,
        message: '删除成功',
      };
    } catch {
      return {
        code: 500,
        message: '删除失败',
      };
    }
  }
}
