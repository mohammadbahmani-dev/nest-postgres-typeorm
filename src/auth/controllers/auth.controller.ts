import {
  Controller,
  Post,
  Request,
  UseGuards,
  Session,
  Get,
} from '@nestjs/common';

import { AuthenticatedGuard, LocalAuthGuard } from '../utils/LocalGuard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
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
  @UseGuards(AuthenticatedGuard)
  @Get('dashboard')
  async getDashboard(@Request() req) {
    return req.user;
  }
}
