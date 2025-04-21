import { BadRequestException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/config/prisma.service';
import { rm } from 'fs/promises';
import * as path from 'path';
import { Prisma } from 'generated/prisma';

@Injectable()
export class ProductService {
  constructor(
    private prisma:PrismaService
  ){}
  async create(createProductDto: CreateProductDto,files:Express.Multer.File[]) {
    try {
      const {categoryId,name,description,price,count} = createProductDto;
      const product = await this.prisma.product.create({data:{
        categoryId:categoryId,
        name,
        description,
        price:price,
        count:count
      }});
      if(!product){
        throw new InternalServerErrorException('Ошибка на сервере');
      }
      for(let obj of files){
        await this.prisma.images.create({data:{
          image:obj.filename,
          productId:product.id
        }});
      }
      return HttpStatus.CREATED;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    
  }

  async findAll() {
    try {
      const products = await this.prisma.product.findMany({
        where:{
          count:{
            gt:0
          }
        },
        include:{
          category:true,
          images:true
        }
      });
      const minimum = await this.prisma.product.aggregate({
        _min:{
          price:true
        }
      });
      if(!products){
        throw new InternalServerErrorException('Не удалось найти данные');
      }
      return {products,minimum};
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAllForAdmin() {
    try {
      const products = await this.prisma.product.findMany({
        include:{
          category:true,
          images:true
        }
      });
      if(!products){
        throw new InternalServerErrorException('Не удалось найти данные');
      }
      return {products};
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: number) {
    try {
      const product = await this.prisma.product.findFirst({where:{id},
      include:{
        images:true,
        category:true
      }
    })
    if(!product){
      throw new BadRequestException('Не удалось найти товар');
    }
    return {product};
    } catch (error) {
      throw new InternalServerErrorException('Ошибка сервера',error);
    }
  }

  async search(name?:string,category?:number,minPrice?:number,maxPrice?:number){
    try {
      console.log(name);
      console.log(category);
      let where:Prisma.ProductWhereInput = {};
      if (name) where.name = {contains:name};
      if (category!==undefined) where.categoryId = category;
      if (minPrice) where.price = {gte:minPrice};
      if (maxPrice) where.price = {lte:maxPrice};
      where.count = {gt:0};
      console.log(where);
      const products = await this.prisma.product.findMany({
        include:{
          category:true,
          images:true
        },
        where
      });
      if(products.length==0){
        throw new BadRequestException('Не удалось найти товары');
      }
      return {products};
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const product = await this.prisma.product.update({where:{id},data:{...updateProductDto}});
      return HttpStatus.OK;
    } catch (error) {
      throw new InternalServerErrorException('Ошибка на сервере',error);
    }
  }

  async remove(id: number) {
    try {
      const imagess = await this.prisma.images.findMany({
        where:{productId:id},
        select:{
          image:true  
        }
      });
      console.log(imagess);
      await Promise.all(
        imagess.map(async (img) => {
          const filePath = path.join(__dirname,'../../','uploads', img.image);
          console.log(filePath);
          try {
            await rm(filePath);
          } catch (err) {
            console.error(`Ошибка при удалении файла ${filePath}:`, err);
          }
        }),
      );
      
      // return {imagess};
      await this.prisma.product.delete({where:{id}});
      return HttpStatus.OK;
    } catch (error) {
      throw new InternalServerErrorException('Ошибка сервера',error.message);
    }
  }
}
