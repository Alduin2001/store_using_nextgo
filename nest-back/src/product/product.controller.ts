import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseGuards, Req, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Role } from 'src/guards/roles.enum';
import { Roles } from 'src/guards/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/guards/roles.guard';
import { UserI } from 'src/interfaces/UserI';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Roles(Role.Admin)
  @UseGuards(AuthGuard('jwt'),RolesGuard)
  @UseInterceptors(FilesInterceptor('images'))
  @Post()
  create(@Body(new ValidationPipe({transform:true})) createProductDto: CreateProductDto,@Req() req:UserI,@UploadedFiles() files:Express.Multer.File[]) {
    console.log(files[0].filename);
    return this.productService.create(createProductDto,files);
  }

  @Get('/forUser')
  findAll() {
    return this.productService.findAll();
  }

  @Roles(Role.Admin)
  @UseGuards(AuthGuard('jwt'),RolesGuard)
  @Get('/forAdmin')
  findAllForAdmin() {
    return this.productService.findAllForAdmin();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
