import { Inject } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';

export class sessionSerializer extends PassportSerializer {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {
    super();
  }

  serializeUser() {}
  deserializeUser() {}
}
