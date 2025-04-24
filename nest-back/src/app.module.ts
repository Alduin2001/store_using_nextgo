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
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { OrderModule } from './order/order.module';
import { CartModule } from './cart/cart.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath:join(__dirname,'..','uploads')
    }),
    ConfigModule.forRoot({isGlobal:true}),
    MongooseModule.forRoot('mongodb://localhost:27017/magazine',{
      auth:{
        username:'admin',
        password:'admin'
      },
      authSource:'admin'
    }),
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
    UserModule, CategoryModule, ProductModule, AuthModule, RoleModule, OrderModule, CartModule],
  controllers: [],
  providers: [JwtStrategy],
  exports:[JwtModule]
})
export class AppModule {}
