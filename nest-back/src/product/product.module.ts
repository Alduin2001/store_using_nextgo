import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from 'src/config/prisma.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
@Module({
  imports:[
    MulterModule.register({
          storage:diskStorage({
            destination:'./uploads',
            filename(req, file, callback) {
              const fileName = `${Date.now()}-${file.originalname}`;
              callback(null,fileName);
            },
          }),
          limits:{
            files:5
          }
      }),
  ],
  controllers: [ProductController],
  providers: [ProductService,PrismaService],
})
export class ProductModule {}
