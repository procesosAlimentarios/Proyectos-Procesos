import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-dto';
import { AuthGuard } from './auth.guard';
import { Response } from 'express';

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
      return result.user;
  }

  @Get()
  @UseGuards(AuthGuard)
  async getDta(
    @Request() request,
  ) {
    return request.user;
  }

}
