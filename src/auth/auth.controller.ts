import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signin() {
    return 'i am signed in';
  }

  @Post('signup')
  signUp() {
    return 'i am signed in';
  }
}
