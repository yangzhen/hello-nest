import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
@Entity()
// Products 表名
export class Products extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'name' }) // Column：字段
  @ApiProperty({ description: '用户名', default: '张三', required: true })
  name: string;

  @ApiProperty({ description: '性别', default: '男', required: false })
  @Column({ type: 'varchar', name: 'sex' })
  sex: string;
}
