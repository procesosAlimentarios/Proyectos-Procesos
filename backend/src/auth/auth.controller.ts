import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-dto';
import { AuthGuard, AuthGuardAdmin } from './auth.guard';
import { Response } from 'express';
import { Roles } from './decorators/roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) { }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response) {
    const result = await this.authService.login(loginDto);
    res.setHeader('Authorization', `Bearer ${result.token}`);
    return result;
  }

  @Post('login-admin')
  @HttpCode(HttpStatus.OK)
  async loginAdmin(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response) {
    const result = await this.authService.loginAdmin(loginDto);
    res.setHeader('Authorization', `Bearer ${result.token}`);
    return result;
  }

  @Get("prueba")
  @Roles("admin")
  @UseGuards(AuthGuard)
  async prueba(){
    return "Funciona"
  }

  @Get("verifyToken")
  @UseGuards(AuthGuard)
  async verifyUser(
    @Request() request,
  ) {
    return this.authService.verifyToken(request.user);
  }

}
