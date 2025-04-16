import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './config/jwt.strategy';
import { RoleModule } from './role/role.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.registerAsync({
      global:true,
      imports:[ConfigModule],
      useFactory:async (configService:ConfigService)=>({
        secret:configService.getOrThrow<string>('SECRET'),
        signOptions:{expiresIn:'12h'}
      }),
      inject:[ConfigService],
    }),
    UserModule, CategoryModule, ProductModule, AuthModule, RoleModule],
  controllers: [],
  providers: [JwtStrategy],
  exports:[JwtModule]
})
export class AppModule {}
