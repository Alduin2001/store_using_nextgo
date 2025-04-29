import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ValidationPipe } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserI } from 'src/interfaces/UserI';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body(new ValidationPipe()) createCartDto: CreateCartDto,@Req() req:UserI) {
    return this.cartService.create(createCartDto,req.user.id);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Req() req:UserI) {
    return this.cartService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('/update_count/:id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto,@Req() req:UserI) {
    return this.cartService.update(+id, updateCartDto,req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  removeCart(@Param('id') id: string,@Req() req:UserI) {
    return this.cartService.removeCart(+id,req.user.id);
  }
}
