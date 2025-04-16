import { BadRequestException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/config/prisma.service';

@Injectable()
export class CategoryService {
  constructor(
    private prisma:PrismaService
  ){}
  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const {name} = createCategoryDto;
      const category = await this.prisma.category.create({data:{name}});
      if(!category){
        throw new BadRequestException('Не удалось добавить категорию');
      }
      return HttpStatus.CREATED;
    } catch (error) {
      throw new InternalServerErrorException('Ошибка на сервере');
    }
  }

  async findAll() {
    try {
      const categories = await this.prisma.category.findMany();
      return {categories}
    } catch (error) {
      throw new InternalServerErrorException('Ошибка на сервере');
    }
  }

  async findOne(id: number) {
    try {
      const category = await this.prisma.category.findFirst({where:{id}});
      if(!category){
        throw new BadRequestException('Не удалось найти категорию');
      }
      return {category};
    } catch (error) {
      throw new InternalServerErrorException('Ошибка на сервере');
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      const updated = await this.prisma.category.update({where:{id},data:{...updateCategoryDto}});
      if(!updated){
        throw new InternalServerErrorException('Не удалось обновить категорию');
      }
    } catch (error) {
      throw new InternalServerErrorException('Ошибка на сервере');
    }
  }

  async remove(id: number) {
    try {
      const category = await this.prisma.category.delete({where:{id}});
      if(!category){
        throw new InternalServerErrorException('Не удалось удалить категорию');
      }
    } catch (error) {
      throw new InternalServerErrorException('Ошибка на сервере');
    }
  }
}
