import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/config/prisma.service';
import { MailSendService } from 'src/mail-send/mail-send.service';

@Module({
  controllers: [UserController],
  providers: [UserService,PrismaService,MailSendService],
})
export class UserModule {}
