import { BadRequestException,InternalServerErrorException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/config/prisma.service';
import * as bcrypt from 'bcrypt';
import * as crypto from 'node:crypto';
import { MailSendService } from 'src/mail-send/mail-send.service';

@Injectable()
export class UserService {
  constructor(
    private prisma:PrismaService,
    private mailSendService:MailSendService
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
      const verification = await this.prisma.verify.create({
        data:{
          token:crypto.randomUUID(),
          userId:user.id
        }
      });
      const verificationUrl = `http://localhost:3000/verifyEmail/${verification.token}`;
      // Отправляем письмо
      await this.mailSendService.sendMail({
        from: 'almas20_01@mail.ru',
        to: user.email,
        subject: 'Подтверждение регистрации',
        html: `
          <h1>Добро пожаловать!</h1>
          <p>Для завершения регистрации перейдите по ссылке:</p>
          <a style="padding:5px;background-color:green;color:#eee;" href="${verificationUrl}">Подтвердить email</a>
        `
      });
  
      return { status: HttpStatus.CREATED, message: 'Пользователь создан' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  // Верификация
  async verifyUser(token:string){
    try {
      const user_id = await this.prisma.verify.findFirst({where:{token},select:{userId:true}});
      if(!user_id){
        throw new BadRequestException('Не удалось найти пользователя');
      }
      await this.prisma.user.update({where:{id:user_id.userId},data:{
        isVerified:true
      }});
      await this.prisma.verify.delete({where:{token}});
      return HttpStatus.OK;
    } catch (error) {
      throw new InternalServerErrorException('Ошибка сервера',error);
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
