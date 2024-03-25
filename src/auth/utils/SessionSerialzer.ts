import { Inject } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/typeorm';
import { UsersService } from 'src/users/users.service';

export class sessionSerializer extends PassportSerializer {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {
    super();
  }

  serializeUser(user: User, done: (err, user: User) => void) {
    done(null, user);
  }
  async deserializeUser(user: User, done: (err, user: User) => void) {
    const userDB = await this.userService.findUsersById(user.id);
    return userDB ? done(null, userDB) : done(null, null);
  }
}
