import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from './entities/cart.entity';
import { PrismaService } from 'src/config/prisma.service';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Cart.name,schema:CartSchema}])
  ],
  controllers: [CartController],
  providers: [CartService,PrismaService],
})
export class CartModule {}
