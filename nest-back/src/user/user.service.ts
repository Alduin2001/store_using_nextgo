import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/config/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private prisma:PrismaService
  ){}
  async create(createUserDto: CreateUserDto) {
    try {
      const {name,surname,email,password} = createUserDto;
      const hashed = await bcrypt.hash(password,5);
      const user = await this.prisma.user.create({
        data:{
          name,
          surname,
          email,
          password:hashed,
          roleId:1
        }
      })
      if(!user){
        throw new BadRequestException('Не удалось добавить пользователя')
      }
      return HttpStatus.CREATED;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
