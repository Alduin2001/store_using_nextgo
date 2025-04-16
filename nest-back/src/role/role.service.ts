import { HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/config/prisma.service';

@Injectable()
export class RoleService {
  constructor(
    private prisma:PrismaService
  ){}
  async create(createRoleDto: CreateRoleDto) {
    try {
      const role = await this.prisma.role.create({data:{...createRoleDto}});
      if(!role){
        throw new InternalServerErrorException('Не удалось добавить роль');
      }
      return HttpStatus.CREATED;
    } catch (error) {
      throw new InternalServerErrorException('Ошибка на сервере');
    }
  }

  findAll() {
    return `This action returns all role`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
