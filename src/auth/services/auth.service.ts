import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}
  async validateUser(username: string, password: string) {
    const userDB = await this.userService.findUserByUsername(username);
    if (userDB) {
      const matched = comparePasswords(password, userDB.password);
      if (matched) {
        console.log('login successful');
        return userDB;
      } else {
        console.log('login unsuccessful');
        return null;
      }
    }
  }
}
