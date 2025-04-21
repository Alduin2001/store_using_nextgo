import { Module } from '@nestjs/common';
import { BucketService } from './bucket.service';
import { BucketController } from './bucket.controller';
import { PrismaService } from 'src/config/prisma.service';

@Module({
  controllers: [BucketController],
  providers: [BucketService,PrismaService],
})
export class BucketModule {}
