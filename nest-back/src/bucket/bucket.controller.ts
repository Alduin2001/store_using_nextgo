import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { BucketService } from './bucket.service';
import { CreateBucketDto } from './dto/create-bucket.dto';
import { UpdateBucketDto } from './dto/update-bucket.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserI } from 'src/interfaces/UserI';

@Controller('bucket')
export class BucketController {
  constructor(private readonly bucketService: BucketService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body(new ValidationPipe()) createBucketDto: CreateBucketDto,@Req() req:UserI) {
    return this.bucketService.create(createBucketDto,req.user.id);
  }

  @Get()
  findAll() {
    return this.bucketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bucketService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBucketDto: UpdateBucketDto) {
    return this.bucketService.update(+id, updateBucketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bucketService.remove(+id);
  }
}
