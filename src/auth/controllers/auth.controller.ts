import {
  Controller,
  Post,
  Request,
  UseGuards,
  Session,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }

  @Post('signup')
  signup() {
    return 'i am signed up';
  }

  @Get('')
  async getAuthSession(@Session() session: Record<string, any>) {
    session.authenticate = true;
    return session;
  }
}
