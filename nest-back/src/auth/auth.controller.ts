import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserI } from 'src/interfaces/UserI';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async create(@Body(new ValidationPipe()) createAuthDto: CreateAuthDto,@Res() res:Response) {
    const {token,role} = await this.authService.login(createAuthDto);
    res.cookie('jwt',token,{httpOnly:true,sameSite:'lax',maxAge:1000*60*60*12});
    console.log(token);
    return res.status(200).json({role});
  }

  @Get('checkAuth')
  @UseGuards(AuthGuard('jwt'))
  checkAuth(@Req() req:UserI,@Res() res:Response) {
    res.status(200).json({role:req.user.role});
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Req() req:UserI){
    return this.authService.getProfile(req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('logout')
  logout(@Res() res:Response){
    res.clearCookie('jwt');
    res.status(200).json({message:"Loged out"});
  }
}

