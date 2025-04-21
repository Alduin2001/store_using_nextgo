import { HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateBucketDto } from './dto/create-bucket.dto';
import { UpdateBucketDto } from './dto/update-bucket.dto';
import { PrismaService } from 'src/config/prisma.service';

@Injectable()
export class BucketService {
  constructor(
    private prisma:PrismaService
  ){}
  async create(createBucketDto: CreateBucketDto,userBucket:number) {
    try {
      const bucket = await this.prisma.bucket.create({data:{...createBucketDto,userBucket}});
      return HttpStatus.CREATED;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  findAll() {
    return `This action returns all bucket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bucket`;
  }

  update(id: number, updateBucketDto: UpdateBucketDto) {
    return `This action updates a #${id} bucket`;
  }

  remove(id: number) {
    return `This action removes a #${id} bucket`;
  }
}
