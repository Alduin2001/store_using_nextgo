import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cart, CartDocument } from './entities/cart.entity';
import { Model } from 'mongoose';
import { PrismaService } from 'src/config/prisma.service';

@Injectable()
export class CartService {
  constructor(
    private prisma:PrismaService,
    @InjectModel(Cart.name) private cartModel:Model<CartDocument>
  ){}
  async create(createCartDto: CreateCartDto,userId:number) {
    try {
      const product = await this.prisma.product.findFirst({where:{id:createCartDto.productId}});
      if(typeof product?.count!=='number'){
        throw new InternalServerErrorException('Нет');
      }
      if(product?.count<createCartDto.count){
        throw new BadRequestException('Не получится');
      }
      const carts = await this.cartModel.findOneAndUpdate({userId},{$push:{items:createCartDto}},{upsert:true,new:true});
      return {carts};
    } catch (error) {
      throw new InternalServerErrorException('Ошибка сервера',error);
    }
  }
  async findAll(userId:number) {
    try {
      const carts = await this.cartModel.find({userId:userId});

      const products = await this.prisma.product.findMany({where:{
        id:carts.items?.productId
      }});
      return {carts};
    } catch (error) {
      throw new InternalServerErrorException('Ошибка сервера',error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  async update(id: number, updateCartDto: UpdateCartDto,userId:number) {
    try {
      const carts = await this.cartModel.findOneAndUpdate({userId,"items.productId":id},{$set:{"items.$.count":updateCartDto.count}},{new:true});
      return {carts};
    } catch (error) {
      throw new InternalServerErrorException('Ошибка сервера',error);
    }
  }

  async removeCart(productId: number,userId:number) {
    try {
      const carts = await this.cartModel.findOneAndUpdate({userId},{$pull:{items:{productId}}},{new:true});
      return {carts};
    } catch (error) {
      throw new InternalServerErrorException('Ошибка сервера',error);
    }
  }
}
