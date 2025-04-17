import { HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/config/prisma.service';

@Injectable()
export class ProductService {
  constructor(
    private prisma:PrismaService
  ){}
  async create(createProductDto: CreateProductDto,files:Express.Multer.File[]) {
    try {
      const product = await this.prisma.product.create({data:{...createProductDto}});
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

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
