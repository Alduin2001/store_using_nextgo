import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/config/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { PaylodI } from 'src/interfaces/Payload';

@Injectable()
export class AuthService {
  constructor(
    private prisma:PrismaService,
    private jwt:JwtService
  ){}
  
  async login(createAuthDto: CreateAuthDto) {
    try {
      const {email,password} = createAuthDto;
      const finded = await this.prisma.user.findUnique({where:{email}});
      if(!finded){
        throw new BadRequestException('Пользователь не найден');
      }
      const findedByPass = await bcrypt.compare(password,finded.password);
      if(!findedByPass){
        throw new BadRequestException('Пользователь не найден');
      }
      const payload:PaylodI = {
        id:finded.id,
        role:finded.roleId
      };
      console.log(payload);
      const token = await this.jwt.signAsync(payload);
      if(!token){
        throw new BadRequestException('Токен не создался');
      }
      return {token:token,role:finded.roleId};
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getProfile(id:number) {
    try {
      const profile = await this.prisma.user.findFirst({where:{id},select:{
        name:true,
        surname:true,
        email:true
      }});
      return {profile};
    } catch (error) {
      throw new InternalServerErrorException('Ошибка на сервере');
    }
  }
}
