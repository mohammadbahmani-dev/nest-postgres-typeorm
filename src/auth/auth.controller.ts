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
  signup() {
    return 'i am signed up';
  }
}
