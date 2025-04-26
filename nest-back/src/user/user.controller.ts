import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserI } from 'src/interfaces/UserI';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
  
  @Patch('/verify/:token')
  verify(@Param('token') token:string){
    return this.userService.verifyUser(token);
  }
  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }
  @Delete('/removeProfile')
  removeProfile(@Req() req:UserI){
    return this.userService.deleteProfile(req.user.id);
  }
  @Delete('/removeUser/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
